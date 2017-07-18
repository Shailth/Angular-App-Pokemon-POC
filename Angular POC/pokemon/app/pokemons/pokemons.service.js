export default class PokemonsService {
  constructor($http) {
    this.$http = $http
  }

  getPokemons() {
    return this.$http.get('http://localhost:3000/pokemon')
  }

}
