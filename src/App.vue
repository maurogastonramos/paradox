<template>
  <div :class="`relative z-50 pointer-events-none font-${fuenteActiva}`">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Orbitron"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat"
    />

    <the-navbar class="pointer-events-auto" />

    <div class="h-auto py-10 md:p-0 relative pointer-events-auto z-40">
      <select
        name="fuentes"
        id="fuentes"
        v-model="fuenteActiva"
        class="fixed top-0 right-0"
        style="z-index: 9999999999999"
      >
        <option v-for="fuente in fuentes" :key="fuente" :value="fuente">
          {{ fuente }}
        </option>
      </select>

      <Particles
        id="tsparticles2"
        class="
          w-full
          h-full
          absolute
          top-0
          right-0
          left-0
          z-10
          pointer-events-none
        "
        :options="particlesConfig"
      />
      <the-main class="md:h-screen" />

      <div class="bg-black">
        <the-servicios id="servicios" />
        <the-secciones id="secciones" />
        <the-clientes id="clientes" />
      </div>
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
  font-family: Anurati;
  src: url("./assets/fonts/Anurati-Regular.otf");
}
@font-face {
  font-family: Blanka;
  src: url("./assets/fonts/Blanka-Regular.ttf");
}
@font-face {
  font-family: Dual;
  src: url("./assets/fonts/Dual-300.ttf");
}
@font-face {
  font-family: Emyrl;
  src: url("./assets/fonts/EMYRLAdemo.ttf");
}
@font-face {
  font-family: Josefin;
  src: url("./assets/fonts/JosefinSans-Regular.ttf");
}
@font-face {
  font-family: Riviera;
  src: url("./assets/fonts/Riviera.otf");
}
@font-face {
  font-family: Robota;
  src: url("./assets/fonts/Robota-NonCommercial.otf");
}
@font-face {
  font-family: Sen;
  src: url("./assets/fonts/Sen-Regular.ttf");
}
@font-face {
  font-family: Special;
  src: url("./assets/fonts/SpecialElite-Regular.ttf");
}
</style>
