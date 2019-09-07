<template>
  <div id="app">
    <nav>
      <router-link to='/'>Cards</router-link>
      <router-link to='/mycollection'>My Collection</router-link>
      <router-link to='/wishlist'>Wishlist</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>

import Cards from './components/Cards.vue'
import MyCollection from './components/MyCollection.vue'
import Wishlist from './components/Wishlist.vue'

export default {
  name: 'app',
  components: {
    Cards,
    MyCollection,
    Wishlist,
  }
}
</script>

<style>
#app {
  width: 65%;
}

nav {
  padding: 1.5rem;
  color: red;
}
</style>
