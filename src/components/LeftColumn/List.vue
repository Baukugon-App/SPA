<template>
  <div>
    <v-list>
      <ListItem
        headerItem: header,
        titleItem: title,
      />
    </v-list>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import ListItem from "./ListItem";

Vue.use(Vuetify);

export default {
  components: {
    ListItem
  },
  props: ["header", "title"]
};
</script>