<template>
  <div>
    <form @submit.prevent="submit">
      <label>Name</label>
      <input type="text" name="name" v-model="name">

      <label>Picture</label>
      <input type="text" name="picture" v-model="picture">
      <button>Add Pokemon</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: 'PokemonCreate',
    setup() {
      const name = ref('')
      const picture = ref('')
      const router = useRouter()

      const submit = async () => {
        await fetch('http://localhost:3000/pokemons', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            name: name.value,
            picture: picture.value
          })
        })
        await router.push('/pokemons')
      }
      return {name, picture, submit}
    }
}
</script>

<style>

</style>