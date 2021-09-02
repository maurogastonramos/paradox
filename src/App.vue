<template>
  <div class="relative z-50">
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
      <Particles
        id="tsparticles2"
        class="w-full h-full absolute top-0 right-0 left-0 z-10"
        :options="particlesConfig"
      />
      <the-main />
    </div>

    <div class="bg-black">
      <the-servicios />
      <the-secciones />
      <the-clientes />
    </div>

    <div class="w-full h-36 bg-transparent z-50"></div>
  </div>
  <the-footer />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheMain from "@/components/TheMain.vue";
import TheServicios from "@/components/TheServicios.vue";
import TheSecciones from "@/components/TheSecciones.vue";
import TheClientes from "@/components/TheClientes.vue";
import TheFooter from "@/components/TheFooter.vue";
import particlesConfig from "@/assets/particlesConfig.json";

export default {
  name: "App",
  components: {
    TheMain,
    TheServicios,
    TheFooter,
    TheSecciones,
    TheNavbar,
    TheClientes,
  },
  setup() {
    return { particlesConfig };
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
  background: black;
}
html {
  scroll-behavior: smooth;
}
</style>
