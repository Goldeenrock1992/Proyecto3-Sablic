<template>
  <div class="container app">
    <h2>Registro</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="name">Nombre:</label>
        <input class="form-control" type="text" id="nombre" v-model="user.nombre" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input class="form-control" type="email" id="email" v-model="user.email" required>
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input class="form-control" type="password" id="password" v-model="user.password" required>
      </div>
      <button class="btn btn-primary mt-3" type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        nombre: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['registerUser']),
    registerUser() {
      axios.post('https://649e09649bac4a8e669e8b5e.mockapi.io/usuarios', this.user)
        .then(response => {
          console.log(response.data);
          alert('Usuario registrado con éxito')
          this.$router.push('/inicio-sesion');
        })
        .catch(error => {
          console.error(error);
        });
    },

    clearFields() {
      this.user.nombre = '';
      this.user.email = '';
      this.user.password = '';
    }
  }
};
</script>

<style scoped>

.app {
  width: 20%;
  margin: 0 auto;

}


</style>