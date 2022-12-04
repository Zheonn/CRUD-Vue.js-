<template>
  <div>
    <router-link :to="{ name: 'PokemonCreate' }" class="btn">Add Pokemon</router-link>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Picture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in pokemons" :key="pokemon.id">
          <td>{{ pokemon.id }}</td>
          <td>{{ pokemon.name }}</td>
          <td><img :src="pokemon.picture" :alt="pokemon.title" width="90"/></td>
          <td>
            <router-link :to="{ name: 'PokemonEdit', params: { id: pokemon.id }}" class="btn">Edit</router-link>
            <button @click="del(pokemon.id)" class="btn btn-del">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
    name: 'Pokemons',
    setup() {
      const pokemons = ref([])

      onMounted(async () => {
        const res = await fetch('http://localhost:3000/pokemons')
        pokemons.value = await res.json()
      })

      const del = async (id) => {
        await fetch(`http://localhost:3000/pokemons/${id}`, {
          method: 'DELETE'
        })

        pokemons.value = pokemons.value.filter(p => p.id !== id)
      }

      return { pokemons, del }
    }
}
</script>

<style>

</style>