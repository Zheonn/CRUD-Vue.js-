<template>
  <div class="sidebar">
    <ul class="side-menu">
      <li><router-link :to="{ name: 'Pokemons'}">Pokemons</router-link></li>
      <li><router-link :to="{ name: 'PokemonCreate'}">Add Pokemon</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style>

</style>