<template>
  <div class="container app">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">Email:</label>
        <input class="form-control" type="email" id="email" v-model="user.email" required>
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input class="form-control" type="password" id="password" v-model="user.password" required>
      </div>
      <button class="btn btn-primary mt-3" type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },

  computed: {
    ...mapGetters(['currentUser'])
  }, 

  methods: {
    ...mapActions(['login']),
    loginUser() {
      this.login(this.user)
        .then(user => {
          alert('Inicio de sesión exitoso:', user);
          this.$router.push('/');
        })
        .catch(error => {
          alert('Error de inicio de sesión:', error);
      
          if (error === 'Credenciales inválidas') {
          
          } else {
            
          }
        });
    }
  }
};
</script>

<style scoped>
.form-control {
  width: 20%;
  margin: 0 auto;
}


</style>