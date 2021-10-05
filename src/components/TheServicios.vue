<template>
  <div class="h-full w-full text-white bg-black py-10 pointer-events-none">
    <div class="container mx-auto select-none z-40 relative">
      <Title title="Qué hacemos" />

      <div class="flex justify-center hex-container h-48 md:mt-10 md:mb-5 relative top-20">
        <div class="row flex justify-center items-center text-gray-500">
          <hexagon
            v-for="opcion in opciones"
            :key="opcion.id"
            class="
              hover:text-main
              text-gray-c
              hover:z-50
              transition
              w-32 h-32
              md:w-44 md:h-44
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
        titulo: "Sistemas de gestión",
      },
      {
        id: "web",
        titulo: "Páginas web",
      },
      {
        id: "comunicacion",
        titulo: "Contenido digital",
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
  margin: -1.5rem;
}
svg:nth-child(odd) {
  position: relative;
  bottom: 4.7rem;
}

@media screen and (max-width: 768px) {
  svg {
    margin: -1.1rem;
  }
  svg:nth-child(odd) {
    position: relative;
    bottom: 3.5rem;
  }
}
</style>