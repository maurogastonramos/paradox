<template>
  <div class="relative">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Baloo+Tamma+2"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Tangerine"
    />

    <the-navbar />

    <div class="h-auto py-10 md:p-0 md:h-screen relative">
      <the-main />
    </div>

    <the-servicios />

    <the-secciones />

    <the-footer />
  </div>
</template>

<script>
import TheMain from "@/components/TheMain.vue";
import TheServicios from "@/components/TheServicios.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSecciones from "@/components/TheSecciones.vue";
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    TheMain,
    TheServicios,
    TheFooter,
    TheSecciones,
    TheNavbar,
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
