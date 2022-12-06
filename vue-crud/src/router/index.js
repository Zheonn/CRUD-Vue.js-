import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Pokemons from '../pages/Pokemons.vue'
import PokemonCreate from '../pages/PokemonCreate.vue'
import PokemonEdit from '../pages/PokemonEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'pokemons',
        name: 'Pokemons',
        component: Pokemons
      },
      {
        path: 'pokemons/create',
        name: 'PokemonCreate',
        component: PokemonCreate
      },
      {
        path: 'pokemons/:id/edit',
        name: 'PokemonEdit',
        component: PokemonEdit,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
