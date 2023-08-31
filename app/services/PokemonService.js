import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { Pop } from "../utils/Pop.js"
import { api } from "./AxiosService.js"


// @ts-ignore
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000
})

class PokemonService {
  async setActivePokemon(activePokemon) {
    let res = await pokeApi.get(`pokemon/${activePokemon}`)
    console.log(res.data)
    AppState.activePokemon = new Pokemon(res.data)
    console.log(AppState.activePokemon)
  }

  async getPokemon() {
    // console.log('getting the pokemon from the API')
    let res = await pokeApi.get('pokemon')
    console.log(res.data.results)
    AppState.pokemon = res.data.results
  }

  async catchPokemon() {
    if (AppState.account) {
      let res = await api.post('api/pokemon', AppState.activePokemon)
      console.log('catching this pokemon', res.data)
      // console.log(AppState.activePokemon.name)
      AppState.myPokemon.push(new Pokemon(AppState.activePokemon))
      AppState.emit('myPokemon')
      console.log(AppState.myPokemon)
    } else {
      Pop.toast('You need to be logged in!')
    }

  }

}

export const pokemonService = new PokemonService()