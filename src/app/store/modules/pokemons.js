//import Api from 'scr/app/utils/Api';

import Api from "../../utils/Api";

export const POKEMONS_LIST_SET = "POKEMONS_LIST_SET";
export const POKEMONS_LIST_ADD = "POKEMONS_LIST_ADD";
export const POKEMONS_LIST = "POKEMONS_LIST";
export const POKEMONS_FETCH = "POKEMONS_FETCH";
export const COUNT = "COUNT";
export const COUNT_SET = "COUNT_SET";
export const TYPES = "TYPES";
export const TYPES_FETCH = "TYPES_FETCH";
export const TYPES_SET = "TYPES_SET";
export const SELECTED_SET = "SELECTED_SET"
export const SELECTED = "SELECTED"
export const POKEMOS_FETCH_TYPE = "POKEMOS_FETCH_TYPE"
export const IS_LOADING = "IS_LOADING"
export const IS_LOADING_SET = "IS_LOADING_SET"

const getDefaultState = () => ({
 list: [],
 count: 0,
 types: [],
 selected: [],
 isLoading: false
});

const state = () => getDefaultState();

const mutations = {
  [POKEMONS_LIST_SET]: (state, payload) => {
    state.list = payload;
  },
  [POKEMONS_LIST_ADD]: (state, payload) => {
    state.list.push(payload);
  },
  [COUNT_SET] : (state, payload) => {
    state.count = payload;
  },
  [TYPES_SET]: (state, payload) => {
    state.types = payload;
  },
  [SELECTED_SET]: (state, payload) => {
    if (payload.length > 2) {
      payload.shift();
    }
    state.selected = payload;
  },
  [IS_LOADING_SET]: (state, payload) => {
    state.isLoading = payload;
  }
}

const actions = {
  [POKEMONS_FETCH]: async ( { commit } ) => {
    try {
      const data  = await Api.getAll();
      for (let i=0; i < data.results.length; i++) {
        data.results[i].details = await Api.getPokemon(data.results[i].name);
      }
      commit(COUNT_SET, data.count);
      commit(POKEMONS_LIST_SET, data.results);

    } catch(error){
      return error;
    }
  },
  [POKEMOS_FETCH_TYPE]: async ( {state,commit} ) => {
    try {
      let merge = [];
      commit(IS_LOADING_SET, true);
      //commit(POKEMONS_LIST_SET, merge);
      if (state.selected.length > 0) {
        let type1, type2 = [];
        let data;
        if (state.selected[0]) {
          data = await Api.getByType(state.selected[0]);
          type1 = data.pokemon;
        }
        if (state.selected[1]) {
          data = await Api.getByType(state.selected[1])
          type2 = data.pokemon
          for (let i=0; i<type1.length; i++) {
            for (let j=0; j<type2.length; j++) {
              if (type1[i].pokemon.name == type2[j].pokemon.name) {
                merge.push(type1[i]);
                break;
              }
            }
          }
        } else {
          merge = type1;
        }
        commit(COUNT_SET, merge.length);
        console.log(merge);
        //commit(POKEMONS_LIST_SET, merge);
        for (let i=0; i < merge.length; i++) {
          merge[i].name = merge[i].pokemon.name;
          merge[i].details = await Api.getPokemon(merge[i].name);
          //commit(POKEMONS_LIST_ADD, merge[i]);
          //commit(POKEMONS_LIST_SET, merge);
        }
        commit(POKEMONS_LIST_SET, merge);commit(IS_LOADING_SET, false);
        commit(IS_LOADING_SET, false);
        //console.log(merge);
      } else {
        commit(IS_LOADING_SET, false);
        commit(COUNT_SET, merge.length);
        commit(POKEMONS_LIST_SET, merge);
      }
    } catch (error) {
      commit(IS_LOADING_SET, false);
      return console.error(error);
    }
  },
  [TYPES_FETCH]: async ({commit}) => {
    try {
      const data = await Api.getTypes();
      commit(TYPES_SET, data.results);
    } catch (error) {
      return error;
    }
  }
}

const getters = {
  [POKEMONS_LIST]: state => state.list,
  [COUNT]: state => state.count,
  [TYPES]: state => state.types,
  [SELECTED]: state => state.selected,
  [IS_LOADING]: state => state.isLoading
};

export default { state, mutations, actions, getters };

