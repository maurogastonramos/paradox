<template>
  <div class="h-full w-full text-white bg-black py-10">
    <div class="container mx-auto select-none z-40 relative">
      <Title title="Productos" />

      <div class="flex justify-center hex-container h-80">
        <div class="row flex justify-center items-center text-gray-500">
          <hexagon
            v-for="opcion in opciones"
            :key="opcion.id"
            class="hover:text-main hover:z-50 transition duration-400 cursor-pointer font-light"
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
        img: "https://pomakana.com/images/icons/gestiononline.png",
        titulo: "Sistemas de Gestión",
        texto: "Texto - Sistemas de Gestión.",
      },
      {
        id: "web",
        img: "https://pomakana.com/images/icons/web.png",
        titulo: "Páginas web",
        texto: "Texto - Páginas web.",
      },
      {
        id: "marketing",
        img: "https://pomakana.com/images/icons/seo.png",
        titulo: "Marketing de contenido",
        texto: "Texto - Marketing de contenido.",
      },
      {
        id: "comunicacion",
        img: "https://pomakana.com/images/icons/consult.png",
        titulo: "Comunicación digital",
        texto: "Texto - Comunicación digital.",
      },
    ];

    return { opciones };
  },
};
</script>

<style scoped>
.hex-container {
}
.row.even {
}

svg {
  margin: -17px;
}
svg:nth-child(even) {
  position: relative;
  bottom: 60px;
}
</style>