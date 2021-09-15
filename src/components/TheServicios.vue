<template>
  <div class="h-full w-full text-white bg-black py-10 pointer-events-none">
    <div class="container mx-auto select-none z-40 relative">
      <Title title="Que hacemos" />

      <div class="flex justify-center hex-container h-80">
        <div class="row flex justify-center items-center text-gray-500">
          <hexagon
            v-for="opcion in opciones"
            :key="opcion.id"
            class="
              hover:text-main
              hover:z-50
              transition
              duration-400
              cursor-pointer
              font-light
              pointer-events-auto
              font-title
            "
            @click="goTo(opcion.id)"
          >
            {{ opcion.titulo }}
          </hexagon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Hexagon from "./Hexagon.vue";
export default {
  components: {
    Title,
    Hexagon,
  },
  setup() {
    const opciones = [
      {
        id: "gestion",
        titulo: "Sistemas de Gestión",
      },
      {
        id: "web",
        titulo: "Páginas web",
      },
      {
        id: "marketing",
        titulo: "Marketing de contenido",
      },
      {
        id: "comunicacion",
        titulo: "Comunicación digital",
      },
    ];

    const goTo = (id) => {
      let element = document.getElementById(id);
      element.scrollIntoView();
    };
    return { opciones, goTo };
  },
};
</script>

<style scoped>
svg {
  margin: -17px;
}
svg:nth-child(even) {
  position: relative;
  bottom: 60px;
}
</style>