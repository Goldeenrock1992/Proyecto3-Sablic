import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "./views/HomePage.vue";
import RegisterForm from './views/RegisterForm.vue';
import LoginForm from './views/LoginForm.vue';
import CarritoCompras from './views/CarritoCompras.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: HomePage
  },
  {
    path: '/registro',
    name: 'Registro',
    component: RegisterForm
  },
  {
    path: '/inicio-sesion',
    name: 'InicioSesion',
    component: LoginForm
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoCompras
  }
];

const router = new VueRouter({
  routes
});

export default router;
