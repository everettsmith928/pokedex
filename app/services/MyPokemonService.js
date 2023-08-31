import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"

class MyPokemonService {
  constructor() {

  }

  async getMyPokemon() {
    console.log('getting my pokemon from the Sandbox')
    let res = await api.get('api/pokemon')
    let myPokemon = res.data.map(pokemon => new Pokemon(pokemon))
    AppState.myPokemon = myPokemon
    // console.log(AppState.myPokemon)
    AppState.emit('myPokemon')
  }
}

export const myPokemonService = new MyPokemonService