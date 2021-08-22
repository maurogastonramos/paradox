<template>
  <div class="h-screen relative">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Teko"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Tangerine"
    />
    <the-main />

    <div id="main">
      <the-servicios />
    </div>

    <the-footer />
  </div>
</template>

<script>
import TheMain from "./components/TheMain.vue";
import TheServicios from "./components/TheServicios.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheMain,
    TheServicios,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  scroll-behavior: smooth;
}
</style>
