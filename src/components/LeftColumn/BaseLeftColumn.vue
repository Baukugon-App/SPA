<template>
  <div class="container">
    <v-layout column>
      <div>
        <List header="Show me" title="Custom Title" />
      </div>

      <div>
        <List header="I am getting there" title="get me theree" />
      </div>

      <div>
        <List header="Weird" title="wild" />
      </div>
    </v-layout>
  </div>
</template>


<script>
import List from "./List";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default {
  components: {
    List
  }
};
</script>

<style scoped>
.container {
  margin: 0.25rem;
  width: 12rem;
}
</style>
