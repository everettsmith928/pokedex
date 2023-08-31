import { AppState } from "../AppState.js"
import { myPokemonService } from "../services/MyPokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawMyPokemon() {
  let listContent = ``
  AppState.myPokemon.forEach(p => listContent += p.MyListTemplate)
  setHTML('my-pokemon', listContent)
}

export class MyPokemonController {
  constructor() {
    // console.log('connecting MY pokemon Controller')
    AppState.on('myPokemon', _drawMyPokemon)
    AppState.on('account', this.getMyPokemon)
  }

  async getMyPokemon() {
    try {
      await myPokemonService.getMyPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }
}