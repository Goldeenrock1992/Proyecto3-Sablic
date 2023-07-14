import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import cart from '../modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    currentUser: null,
    isModalVisible: false
  },

  modules: {
    cart: {
      state: {
        cartItems: []
      },
      mutations: {
        addToCart(state, product) {
          state.cartItems.push(product);
        }
      },
      actions: {
        addToCart({ commit }, product) {
          commit('addToCart', product);
        }
      },
      getters: {
        getCartItems(state) {
          return state.cartItems;
        },
        cartTotal(state) {
          return state.cartItems.reduce((total, item) => total + item.precio, 0);
        }
      }
    }
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },

    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },

    setCurrentUser(state, user) {
      state.currentUser = user;
    },

  },

  actions: {
    registerUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios.post('https://649e09649bac4a8e669e8b5e.mockapi.io/usuarios', user)
          .then(response => {
            commit('SET_USER', response.data);
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.get('https://649e09649bac4a8e669e8b5e.mockapi.io/usuarios')
          .then(response => {
            const users = response.data;
            const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
            if (user) {
              commit('setAuthentication', true);
              commit('setCurrentUser', user);
              resolve(user);
            } else {
              reject('Credenciales inválidas');
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    logout({ commit }) {
      localStorage.removeItem('token');
      commit('setAuthentication', false);
      commit('setCurrentUser', null);
    },

    showModal({ commit }) {
      commit('toggleModal');
    }
  },

  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.currentUser,

  },
});
