<template>
    <div>
      <h2>Lista de Productos</h2>
      <div class="container">
        <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ product.nombre }}</h5>
              <p class="card-text">Precio: {{ product.precio }}</p>
              <img :src="product.imagen" class="card-img-top" alt="Imagen del producto">
              <button @click="addToCart(product)" class="btn btn-primary">Agregar al carrito</button>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';

  
  export default {
    data() {
      return {
        products: []
      };
    },

    created() {
      this.fetchProducts();
    },

    computed: {
    ...mapGetters(['getProducts']),
    ...mapGetters(['getCartItems', 'cartTotal'])
    
  },

    methods: {
      fetchProducts() {
        axios.get('https://649e09649bac4a8e669e8b5e.mockapi.io/productos')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },

      ...mapActions('cart', ['addToCart', 'removeFromCart', 'clearCart']),
    
    },

  };

  </script>
  
  <style>
  .card {
    margin-bottom: 20px;
  }
  </style>
  