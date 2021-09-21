<template>
  <b-card
    header="Filter by type"
    class="filters-card">
    <b-card-text>
      <b-form-checkbox-group
        id="types-checkbox"
        v-model="selected"
      >
        <b-form-checkbox 
          v-for="type in types"
          :key="type.name"
          :value="type.name"
          @change="pokemonFetchType"
        >
        {{ type.name }}
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-card-text>

    <template #footer>
      {{ count }} found
    </template>
  </b-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { TYPES, TYPES_FETCH, POKEMOS_FETCH_TYPE, COUNT } from '../store/modules/pokemons'

export default {
  name: 'Filters',
  computed: {
    ...mapGetters({
      types: TYPES,
      count: COUNT
    }),
    selected: {
    get() {
      return this.$store.state.types
    },
    set(value) {
      this.$store.commit('SELECTED_SET', value);
    }
  },
  },
  methods: {
    ...mapActions({
      typesFetch: TYPES_FETCH,
      pokemonFetchType: POKEMOS_FETCH_TYPE
    })
  },
  beforeMount(){
    this.typesFetch();
  }
}
</script>

<style>
  .filters-card {
    width: 100%;
  }

  .custom-checkbox label {
    margin-left: 5px;
  }
</style>
