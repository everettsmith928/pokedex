import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemonList() {
  let listTemplate = ``
  AppState.pokemon.forEach(p => listTemplate += Pokemon.ListTemplate(p))
  setHTML('pokemon-list', listTemplate)
}

function _drawActivePokemon() {
  let activePokemon = AppState.activePokemon
  console.log('drawing active pokemon')
  setHTML('active-pokemon', activePokemon.ActiveTemplate)
}

export class PokemonController {
  constructor() {
    console.log('Constructor connected')
    this.getPokemon()
    AppState.on('pokemon', _drawPokemonList)
    AppState.on('activePokemon', _drawActivePokemon)
  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }

  async setActivePokemon(activePokemon) {
    try {
      await pokemonService.setActivePokemon(activePokemon)
    } catch (error) {
      Pop.error(error)
    }
  }

  async catchPokemon() {
    try {
      await pokemonService.catchPokemon()
    } catch (error) {
      Pop.error(error)
    }

  }
}