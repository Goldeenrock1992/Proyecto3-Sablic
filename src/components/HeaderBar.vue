<template>
  <header>
    <nav>
      <h2><router-link to="/">FoodApp</router-link></h2>
      <ul>
        <li v-if="!isAuthenticated">
          <router-link to="/registro">Registro</router-link>
          <router-link to="/inicio-sesion">Iniciar sesión</router-link>
        </li>
        <li v-else>
          <span>Hola {{ currentUser.nombre }}</span> 
          <router-link to="/carrito"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="shopping-cart"/></router-link>
          <button @click="logoutUser">Cerrar sesión</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "HeaderBar",

  computed: {
    ...mapGetters(['isAuthenticated', 'currentUser'])
  },

  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout()
        .then(() => {
          // Realiza acciones adicionales después de cerrar sesión
          // Redirige a la página de inicio, por ejemplo:
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Error al cerrar sesión:', error);
          // Maneja el error al cerrar sesión
        });
    },
    // ...
  },
};
</script>

<style scoped>
.navbar {
  background-color: blueviolet;
  height: 10vh;
  margin-bottom: 5rem;
}

.navbar-nav {
  --bs-nav-link-padding-x: none;
}

.navbar-expand-lg .navbar-collapse {
  justify-content: end;
}

a {
  color: black;
  text-decoration: none;
  margin-right: 2rem;
}
</style>

<style>

ul {
  list-style: none;
}


</style>
