
import { mapGetters } from 'vuex';

const cart = {

  namespaced: true,

  state: {
    cartItems: [],
    total: 0
  },

  mutations: {
    ADD_TO_CART(state, product) {
      state.cartItems.push(product);
    },

    REMOVE_FROM_CART(state, product) {
      const index = state.cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },

    CLEAR_CART(state) {
      state.cartItems = [];
    },

    SET_TOTAL(state, total) {
      state.total = total;
    },
  },

  computed: {
    ...mapGetters('cart', ['cartTotal']),
  },

  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },

    calculateTotal({ commit, state }) {
      const total = state.items.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);

      commit('SET_TOTAL', total);
    },

  },

  getters: {

    getCartItems(state) {
      return state.cartItems;
    },

    getCartTotal(state) {
      return state.cartItems.reduce((total, item) => total + item.price, 0);
    }
  }
};

export default cart;
