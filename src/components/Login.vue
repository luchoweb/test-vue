<template>
  <div class="login">
    <div class="form">
      <div class="row justify-content-lg-center">
        <div class="col-lg-4 col-sm-12 text-center">
          <img src="@/assets/logo.png" alt="Mi Tienda" class="logo">
          <p class="intro">Ingresa el número de teléfono de tu asesora independiente</p>
          <input type="tel" id="mobilephone" maxlength="12" @keypress="isNumber($event)" placeholder="Teléfono" class="input">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods : {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $assets: '~@/assets/';

  .login {
    background: url($assets + '/login-bg.jpg') top center no-repeat;
    background-size: cover;
    position: fixed;
    height: 100%;
    width: 100%;

    .form {
      color: #fff;
      position: fixed;
      left: 0;
      right: 0;
      top: 27vh;

      .logo {
        display: block;
        margin: 0 auto 20px auto;
        max-width: 200px;
      }

      .intro {
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
        margin: 0 auto 20px auto;
        width: 80%;
      }

      .input {
        appearance: none;
        background: none;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        max-width: 300px;
        padding: 12px 8px;
        width: 80%;

        &::-webkit-input-placeholder {
          color: #fff;
        }
        &::-moz-placeholder {
          color: #fff;
        }
        &:-ms-input-placeholder {
          color: #fff;
        }
        &:-moz-placeholder {
          color: #fff;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>
