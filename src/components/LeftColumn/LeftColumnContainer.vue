<template>
  <div class="container">
    <TextBoxComp class="compStyle" />
    <ComboBox class="compStyle" searchBoxText="Search by faction" v-bind:data="factions" />
    <ComboBox class="compStyle" searchBoxText="Search by card set" v-bind:data="cardSet" />
    <ComboBox class="compStyle" searchBoxText="Search by card type" v-bind:data="cardType" />
    <ComboBox class="compStyle" searchBoxText="Search by card rarity" v-bind:data="cardRarity" />
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
  }
};
</script>

<style scoped>
.container {
  background-color: #DEF2F1;
  width: 19rem;
}
.compStyle{
  display: flex;
  justify-content: center;
  height: 8rem;
}
</style>