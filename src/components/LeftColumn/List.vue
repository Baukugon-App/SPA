<template>
    <v-list>
        <v-subheader>{{ header }}</v-subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Profile photo</v-list-tile-title>
            <v-list-tile-sub-title>{{ title }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Show your status</v-list-tile-title>
            <v-list-tile-sub-title>Your status is visible to everyone</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
</template>

<script>
export default {
    props: [
        'header',
        'title'
    ],
}
</script>