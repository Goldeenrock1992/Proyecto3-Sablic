<template>
  <div>
    <h2>Carrito de compras</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.nombre }} - {{ item.precio }}
      </li>
    </ul>
    <p>Total: {{ cartTotal }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['getCartItems', 'cartTotal']),
    cartItems() {
      return this.getCartItems;
    }
  },
  created() {
    this.calculateTotal();
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'calculateTotal'])
  }
}
</script>
