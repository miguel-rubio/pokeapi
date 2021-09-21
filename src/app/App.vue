<template>
  <div id="app">
    <Navbar/>
    <b-container variant="fluid">
      <b-row>
        <b-col cols="2">
          <Filters/>
        </b-col>
        <b-col>
          <Pokemons/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Pokemons from './components/Pokemons.vue'
import Filters from './components/Filters.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Filters,
    Pokemons
  }
}
</script>

<style>
  body {
    background-color: #f4f5f8 !important;
  }
</style>