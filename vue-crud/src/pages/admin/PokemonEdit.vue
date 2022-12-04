<template>
  <div>
    <form @submit.prevent="submit">
      <label>Name</label>
      <input type="text" name="name" v-model="name">

      <label>Picture</label>
      <input type="text" name="picture" v-model="picture">
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    name: 'PokemonEdit',
    props: ['id'],
    setup() {
      const name = ref('')
      const picture = ref('')
      const router = useRouter()
      const route = useRoute()

      onMounted(async() => {
        const res = await fetch(`http://localhost:3000/pokemons/${route.params.id}`)
        const pokemon = await res.json()
        name.value = pokemon.name
        picture.value = pokemon.picture
      })

      const submit = async () => {
        await fetch(`http://localhost:3000/pokemons/${route.params.id}`, {
          method: 'PUT',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            name: name.value,
            picture: picture.value
          })
        })
        await router.push('/admin/pokemons')
      }
      return {name, picture, submit}
    }
}
</script>

<style>

</style>