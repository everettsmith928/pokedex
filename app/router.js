import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { MyPokemonController } from "./controllers/MyPokemonController.js";
import { PokemonController } from "./controllers/PokemonController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokemonController, MyPokemonController],
    view: /*html*/`
    <div class="container-fluid">
    <section class="row m-0">
    <div class="col-2" id="pokemon-list">
    
    </div>
    <div class="col-6" id="active-pokemon">
    </div>

    <div class="col-4" id="my-pokemon"></div>
    </section>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */