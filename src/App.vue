<template>
  <v-app>
    <v-content class="container">
      <div class="pageLayout">
        <HeaderContainer/>
      </div>
      <div class="pageLayout">
        <router-view></router-view>
      </div>
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
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
}
.pageLayout {
  display: flex;
  flex: 1;
  flex-direction: row;
}
</style>
