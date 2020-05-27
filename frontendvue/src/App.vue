<template>
  <div id="app">
    <Header />
    <div class="container content">
      <router-view></router-view>
    </div>
    <!-- <Taller/> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>

@import "./assets/css/general.css";
</style>
