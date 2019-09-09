<template>
  <div class="container">
    <div class="comboBoxSize">
      <div>
        <TextBoxComp/>
      </div>
      <div>
        <ComboBox />
      </div>
    </div>
  </div>
</template>

<script>
import ComboBox from "./ComboBox";
import TextBoxComp from "./TextBoxComp";

export default {
  components: {
    ComboBox,
    TextBoxComp
  }
};
</script>

<style scoped>
.container {
  background-color: brown;
  width: 15rem;
}
.comboBoxSize {
  
}
</style>