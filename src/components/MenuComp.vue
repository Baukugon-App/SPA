<template>
  <div>
    <div class="text-center">
      <v-menu top :close-on-content-click="closeOnContentClick">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Dropdown</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" @click="addItem(item)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>


<script>
export default {
  data: {
    items: [
      { title: "Click Me1" },
      { title: "Click Me2" },
      { title: "Click Me3" },
      { title: "Click Me4" }
    ],
    closeOnContentClick: false,
    itemsSelected: []
  },
  methods: {
    addItem(item) {
      this.itemsSelected.push({ title: item.title });
    }
  }
};
