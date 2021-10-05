<template>
  <div :class="`relative z-50 pointer-events-none`">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Orbitron"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat"
    />

    <the-navbar class="pointer-events-auto" />

    <div class="h-auto md:p-0 relative pointer-events-auto z-40 bg-black">
      
      <the-main class="h-screen pointer-events-auto py-10" />
      <the-servicios id="servicios" />
      <Particles
        id="tsparticles2"
        class="
          w-full
          h-full
          absolute
          top-0
          right-0
          left-0
          pointer-events-none
        "
        :options="particlesConfig"
      />
    </div>

    <div class="bg-black pointer-events-auto">
      <the-secciones id="secciones" />
      <the-equipo />
      <the-clientes id="clientes" />
    </div>

    <div
      class="w-full h-36 bg-transparent z-40 pointer-events-none"
      id="footer"
    ></div>
  </div>

  <the-footer class="z-50" />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheMain from "@/components/TheMain.vue";
import TheServicios from "@/components/TheServicios.vue";
import TheSecciones from "@/components/TheSecciones.vue";
import TheClientes from "@/components/TheClientes.vue";
import TheFooter from "@/components/TheFooter.vue";
import particlesConfig from "@/assets/particlesConfig.json";
import { ref } from "@vue/reactivity";
import TheEquipo from './components/TheEquipo.vue';

export default {
  name: "App",
  components: {
    TheMain,
    TheServicios,
    TheFooter,
    TheSecciones,
    TheNavbar,
    TheClientes,
    TheEquipo,
  },
  setup() {
    const fuentes = [
      "Orbitron",
      "Montserrat",
      "Anurati",
      "Blanka",
      "Dual",
      "Emyrl",
      "Josefin",
      "Riviera",
      "Robota",
      "Sen",
      "Special",
    ];
    let fuenteActiva = ref(null);
    return { particlesConfig, fuentes, fuenteActiva };
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
}
html {
  scroll-behavior: smooth;
}
circles {
  z-index: 10;
}

@font-face {
  font-family: Special;
  src: url("./assets/fonts/SpecialElite-Regular.ttf");
}
</style>
