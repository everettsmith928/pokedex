export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img || data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }


  static ListTemplate(pokemon) {
    return `<div class="bg-dark text-light p-1 selectable"  onclick="app.PokemonController.setActivePokemon('${pokemon.name}')"><h2>${pokemon.name}</h2></div>`
  }

  get MyListTemplate() {
    return `<div><p>${this.name}</p></div>`
  }

  get ActiveTemplate() {
    return `
    <div class="card text-center">
    <h1>${this.name}</h1>
    <p>${this.height}<p>
    <p>${this.weight}<p>
    <img src="${this.img}">
    </div>
    <button class="btn btn-primary" onclick="app.PokemonController.catchPokemon()">CATCH POKEMON</button>
    `
  }
}