<template>
  <b-container>
    <!--b-row align-v="stretch">
      <b-col 
        cols = "2"
        v-for = "pokemon in pokemonsList"
        v-bind:key = "pokemon.id">
        <b-card
          :title="pokemon.name"
          :img-src="pokemon.details.sprites.other.dream_world.front_default"
        ></b-card>
      </b-col>
    </b-row-->
    <b-row 
      v-if="isLoading"
      class="loading-wrapper"
      align-v="center" 
      align-h="center">
      <b-col>
        <img 
          class="loading-ball" 
          src="/assets/loading_ball_2.gif"/>
      </b-col>
    </b-row>
    <b-card-group 
      v-if="!isLoading"
      deck>
      <b-card
        v-for = "pokemon in pokemonsList"
        :key = "pokemon.id"
        :title="pokemon.pokemon.name"
        :img-src="pokemon.details.sprites.other['official-artwork'].front_default">
        <b-card-text>  
            
        </b-card-text>
        <template #footer>
          <em v-if="pokemon.details">
            <b-badge 
              v-if="pokemon.details.types[0]" 
              pill 
              :variant="pokemon.details.types[0].type.name">
                {{ pokemon.details.types[0].type.name }}
            </b-badge>
            <b-badge 
              v-if="pokemon.details.types[1]" 
              pill 
              :variant="pokemon.details.types[1].type.name">
                {{ pokemon.details.types[1].type.name }}
            </b-badge>
          </em>
        </template>
      </b-card>
      <!-- <div v-for="pokemon in pokemonsList" :key="pokemon.id">{{pokemon}}</div> -->
    </b-card-group>

  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { POKEMONS_FETCH, POKEMONS_LIST, COUNT, IS_LOADING } from '../store/modules/pokemons'

export default {
  name: "Pokemons",
  computed: {
    ...mapGetters({
      pokemonsList: POKEMONS_LIST,
      count: COUNT,
      isLoading: IS_LOADING
    })
  },
  methods: {
    ...mapActions({
      pokemonsFetch: POKEMONS_FETCH
    })
  },
  beforeMount(){
    //this.pokemonsFetch();
  }
}

</script>

<style>

.card-img { 
  max-height: 150px;
  max-width: 210px !important; 
  margin: 10px;
  align-self: center;
}

.card { 
  width: 20%; 
  margin: 10px;
}

.card-deck { 
  display: flex; 
  flex-wrap: wrap; 
}
 
.card-title {
  text-align: center;
}

.card-footer {
  text-align: right;
}

.badge {
  margin-left: 5px;
}

.loading-wrapper {
  min-height: 60vh;
}

.badge-bug { background-color: darkgreen }
.badge-dark { background-color: black }
.badge-dragon { background-color: darkcyan }
.badge-electric { background-color: darkgoldenrod }
.badge-fairy { background-color: maroon }
.badge-fighting { background-color: darkorange }
.badge-fire { background-color: darkred }
.badge-flying { background-color: darkgray }
.badge-ghost { background-color: darkslateblue }
.badge-grass { background-color: green }
.badge-ground { background-color: brown }
.badge-ice { background-color: cyan }
.badge-normal { background-color: darksalmon }
.badge-poison { background-color: purple }
.badge-psychic { background-color: darkviolet }
.badge-rock { background-color: darkslategrey }
.badge-steel { background-color: darkturquoise }
.badge-water { background-color: darkblue }

</style>

