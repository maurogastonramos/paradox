<template>
<div class="mb-20 md:mb-40">
  <Title title="Quiénes somos" class="text-white mb-10"/>
  <div class="w-full mx-auto mb-20 my-5 flex justify-center">
    <div class="grid equipo-container justify-items-center relative">
      <hexagon
        class=" text-black hover:text-main w-40 h-40 md:w-52 md:h-52 hover:z-50"
        v-for="persona in equipo"
        :key="persona.nombre"
        :withImage="true"
        :image="persona.foto"
        :nombre="persona.nombre"
      >
      </hexagon>
    </div>
  </div>
  </div>
</template>

<script>
import Hexagon from "./Hexagon.vue";
import Title from "./Title.vue";

export default {
  components: {
    Hexagon,
    Title,
  },
  setup() {
    const equipo = [
      { nombre: "Vivi", foto: "vivi" },
      { nombre: "Flavio", foto: "fla" },
      { nombre: "Martín", foto: "martin" },
      { nombre: "Ale", foto: "ale" },
      { nombre: "Fabri", foto: "fabri" },
      { nombre: "Rebe", foto: "rebe" },
      { nombre: "Mauro", foto: "mauro" },      
      { nombre: "Trefu", foto: "trefu" },      
    ];

    return { equipo };
  },
};
</script>

<style scoped>
@media screen and (min-width: 769px) {
  .equipo-container {
    grid-template-columns: repeat(4, minmax(0, 160px));
    grid-template-rows: repeat(1, minmax(0, 185px));
    /* grid-template-columns: repeat(4, minmax(0, 155px));
    grid-template-rows: repeat(1, minmax(0, 175px)); */
  }
  svg:nth-child(even) {
    position: relative;
    top: 5.7rem;
    /* top: 5.5rem; */
  }
}

@media screen and (min-width: 436px) and (max-width: 768px) {
  .equipo-container {
    grid-template-columns: repeat(3, minmax(0, 125px));
    grid-template-rows: repeat(3, minmax(0, 145px));
  }
  svg:nth-child(3n + 1), svg:nth-child(3n + 3) {
    position: relative;
    top: 4.6rem;
  }
}

@media screen and (max-width: 436px) {
  .equipo-container {
    grid-template-columns: repeat(2, minmax(0, 122px));
    grid-template-rows: repeat(4, minmax(0, 140px));
  }
  svg:nth-child(even) {
    position: relative;
    top: 4.4rem;
  }
}
</style>

<style>
.equipo-container:hover image {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.equipo-container .hexagon:hover image {
  -webkit-filter: grayscale(0%) !important; /* Safari 6.0 - 9.0 */
  filter: grayscale(0%) !important;
}
</style>