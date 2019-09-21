<template>
  <v-app>
    <v-content class="container">
      <HeaderContainer />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HeaderContainer from "./components/Header/HeaderContainer";
export default {
  components: {
    HeaderContainer
  }
};
</script>
<style scoped>
.container{
  background-color: #FEFFFF;
}
</style>
