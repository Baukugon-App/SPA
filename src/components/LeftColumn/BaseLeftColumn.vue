<template>
  <div class="container">
    <v-layout row>
      <List 
        header="Show me"
        title="Custom Title"
      />
      <List
      header="I am getting there"
        title="get me theree"/>
      <List
      header="Weird"
        title="wild"/>
    </v-layout>
  </div>
</template>


<script>
import List from './List'
export default {
  components: {
    List
  }

};
</script>

<style scoped>
.container {
  display: flex;
  margin: 1rem
}
</style>
