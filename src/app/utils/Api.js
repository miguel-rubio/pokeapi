import axios from 'axios'

export default class Api {
  static apiUrl = 'https://pokeapi.co/api/v2/';

  static async getAll() {
    try {
      const request = await axios.get(this.apiUrl+"pokemon");
      return request.data;
    } catch(error) {
      return Promise.reject(error);
    }
  }

  static async getPokemon(id) {
    try {
      const request = await axios.get(this.apiUrl+"pokemon/"+id);
      return request.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getByType(type) {
    try {
      const request = await axios.get(this.apiUrl+"type/"+type);
      return request.data;
    } catch(error) {
      return Promise.reject(error);
    }
  }

  static async getTypes(){
    try {
      const request = await axios.get(this.apiUrl+"type");
      return request.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}