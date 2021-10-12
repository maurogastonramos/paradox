<template>
  <div class="h-full w-full py-16 md:py-10 text-white bg-black pointer-events-none">
    <div class="h-72v md:h-auto flex flex-col justify-center container mx-auto select-none z-40 relative">
      <Title title="Qué hacemos" />

      <div class="flex justify-center hex-container h-48 mobile:mt-10 mobile:mb-5 md:mt-20 md:mb-28 relative top-20">
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
              mobile:w-44 mobile:h-44
              md:w-56 md:h-56
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

@media screen and (max-width: 435px) {
  svg {
    margin: -1.1rem;
  }
  svg:nth-child(odd) {
    position: relative;
    bottom: 3.5rem;
  }
}
@media screen and (min-width: 768px) {
  svg {
    margin: -1.9rem;
  }
  svg:nth-child(odd) {
    position: relative;
    bottom: 6rem;
  }
}
</style>