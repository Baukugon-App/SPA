<template>
  <div class="container">
    <TextBoxComp />
    <ComboBox searchBoxText="Search by faction" v-bind:data="factions" />
    <ComboBox searchBoxText="Search by card set" v-bind:data="cardSet" />
    <ComboBox searchBoxText="Search by card type" v-bind:data="cardType" />
    <ComboBox searchBoxText="Search by card rarity" v-bind:data="cardRarity" />
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


(Search Cards by Rarity)
Common Cards
Rare Cards
Super Rare Cards
Awesome Rare Cards
Bakugan Elite Cards


<style scoped>
.container {
  background-color: darkgrey;
  width: 15rem;
}
.comboBoxSize {
}
</style>