<template>
  <div>
    <Scene></Scene>
    <DigitalScreen></DigitalScreen>
  </div>
</template>

<script setup>
import Scene from "./components/Scene.vue";
import DigitalScreen from "./components/DigitalScreen.vue";
</script>

<style lang="less" >
.cssrender {
  position: fixed;
  top: 0;
  left: 0;
}

.elementContent {
  background-color: rgb(20 143 221 / 68%);
  box-shadow: 0px 0px 12px rgb(0 128 255 / 75%);
  border: 1px solid rgb(127 177 255 / 75%);
  padding: 20px;

  color: #efefef;
}

.elementContent h1 {
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
  color: #efefef;
}
</style>
