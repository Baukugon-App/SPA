<template>
  <v-list>
    <v-subheader>{{ headerItem }}</v-subheader>
    <v-list-tile avatar>
      <v-list-tile-content>
        <v-list-tile-title>Profile photo</v-list-tile-title>
        <v-list-tile-sub-title>{{ titleItem }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: ["headerItem", "titleItem"]
};
</script>