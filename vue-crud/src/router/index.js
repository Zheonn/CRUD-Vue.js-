import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Admin from '../pages/admin/Admin.vue'
import Pokemons from '../pages/admin/Pokemons.vue'
import PokemonCreate from '../pages/admin/PokemonCreate.vue'
import PokemonEdit from '../pages/admin/PokemonEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
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
