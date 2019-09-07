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
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
