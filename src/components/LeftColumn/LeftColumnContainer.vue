<template>
  <div class="container">
    <TextBoxComp class="compStyle" />
    <ComboBox class="compStyle" searchBoxText="Search by faction" v-bind:data="factions"  v-on:dataChanged="setFactions($event)"/>
    <ComboBox class="compStyle" searchBoxText="Search by card set" v-bind:data="cardSet" v-on:dataChanged="setCardSet($event)" />
    <ComboBox class="compStyle" searchBoxText="Search by card type" v-bind:data="cardType" v-on:dataChanged="setCardType($event)" />
    <ComboBox class="compStyle" searchBoxText="Search by card rarity" v-bind:data="cardRarity" v-on:dataChanged="setCardRarity($event)" />
  </div>
</template>

<script>
import ComboBox from "./ComboBox";
import TextBoxComp from "./TextBoxComp";

export default {
  components: {
    ComboBox,
    TextBoxComp
  },
  data() {
    return {
      factions: [
        { text: "Aquos", color: "indigo darken-4" },
        { text: "Aurelus", color: "yellow accent-4" },
        { text: "Darkus", color: "black" },
        { text: "Haos", color: "white" },
        { text: "Pyrus", color: "red darken-4" },
        { text: "Ventus", color: "light-green darken-4" }
      ],
      cardSet: [{ text: "Battle Planet" }, { text: "Resurgence" }],
      cardType: [
        { text: "Action" },
        { text: "Character" },
        { text: "Evo" },
        { text: "Flip" },
        { text: "Hero" }
      ],
      cardRarity: [
        { text: "Awesome Rare" },
        { text: "Bakugan Elite" },
        { text: "Common" },
        { text: "Rare" },
        { text: "Super Rare" }
      ]
    };
  },
  methods: {
    setFactions: function(factions) {
      this.$store.dispatch('setFactions', factions);
    }
  },
  computed: {
    getFactions() {
      return this.$store.state.selectedFactions;
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #def2f1;
  width: 19rem;
}
.compStyle {
  display: flex;
  justify-content: center;
  height: 8rem;
}
</style>