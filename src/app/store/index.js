import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import pokemons from './modules/pokemons'

Vue.use(Vuex);

const state = {};

const store = new Store({
  state,
  modules: {
    pokemons
  },
  plugins: []
});

export default store;