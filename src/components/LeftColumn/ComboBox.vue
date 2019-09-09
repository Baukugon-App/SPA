<template>
  <v-combobox
    v-model="model"
    :hide-no-data="!search"
    :items="items"
    :search-input.sync="search"
    hide-selected
    label="Search for an option"
    multiple
    small-chips
    solo
  >
    <template v-slot:selection="{ attrs, item, parent, selected }">
      <v-chip
        v-if="item === Object(item)"
        v-bind="attrs"
        :color="item.color"
        :input-value="selected"
        label
        small
        dark
      >
        <span class="pr-2">{{ item.text }}</span>
        <v-icon small @click="parent.selectItem(item)">x</v-icon>
      </v-chip>
    </template>
    <template v-slot:item="{ index, item }">
      <v-text-field
        v-if="editing === item"
        v-model="editing.text"
        autofocus
        flat
        background-color="transparent"
        hide-details
        solo
        @keyup.enter="edit(index, item)"
      ></v-text-field>
      <v-chip v-else :color= "item.color" dark label small>{{ item.text }}</v-chip>
      <div class="flex-grow-1"></div>
    </template>
  </v-combobox>
</template>


<script>
export default {
  data: () => ({
    activator: null,
    attach: null,
    colors: ["green", "purple", "indigo", "cyan", "teal", "orange"],
    editing: null,
    index: -1,
    items: [
      {
        text: "Foo",
        color: "blue"
      },
      {
        text: "Bar",
        color: "red"
      }
    ],
    nonce: 1,
    menu: false,
    x: 0,
    search: null,
    y: 0
  }),


  methods: {
    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.index = index;
      } else {
        this.editing = null;
        this.index = -1;
      }
    },
  }
};
</script>
