<template>
  <v-form>
    <v-container>
      <v-col>
        <v-text-field
          single-line
          v-model="cardName"
          label="Search Card Name"
          outlined
          clearable
          @input="log(cardName)"
          class="font"
        ></v-text-field>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      cardName: ""
    };
  },
  methods: {
      log: function (e){
        console.log(e);
      }
  },
};
</script>

<style scoped>
.font {
  font-size: 1.4rem;
  text-align: center;
}
</style>