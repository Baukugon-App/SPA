<template>
  <v-combobox
    v-model="model"
    :hide-no-data="!search"
    :items="data"
    :search-input.sync="search"
    hide-selected
    :label="searchBoxText"
    multiple
    small-chips
    v-on:input="setSelectedData"
  >
    <template v-slot:selection="{ attrs, item, parent, selected }">
      <v-chip
        v-if="item === Object(item)"
        v-bind="attrs"
        :color="item.color"
        :input-value="selected"
        label
        small
      >
        <span class="pr-4">{{ item.text }}</span>
        <v-icon small @click="parent.selectItem(item)">x</v-icon>
      </v-chip>
    </template>
  </v-combobox>
</template>


<script>
export default {
  props: ["searchBoxText", "data"],
  data: () => ({
    activator: null,
    attach: null,
    editing: null,
    index: -1,
    nonce: 1,
    menu: false,
    x: 0,
    search: null,
    list:[],
    model: [],
    y: 0
  }),
  methods: {
    setSelectedData: function() {
      this.$emit('dataChanged', this.model);
    }
  }
};
</script>
