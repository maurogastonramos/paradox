<template>
  <div class="bg-black relative my-10">
    <div class="container mx-auto py-10 select-none">

      <Title title="Productos" />
      <div
        class="
          w-full
          lg:w-10/12
          mx-auto
          mt-5
          lg:p-0
          justify-items-stretch
          gap-x-3 gap-y-10
          md:flex
          grid
          grid-cols-2
        "
      >
        <a
          v-for="opcion in opciones"
          :key="opcion.id"
          :data-aos="'fade-up'"
          data-aos-duration="1000"
          data-aos-once="true"
          :data-aos-delay="'500'"
          class="cursor-default w-full sm:w-auto  flex justify-center flex-1"
        >
          <!-- :href="`#${opcion.id}`" -->
          <div
            :class="[
              'p-4 space-y-4 rounded-full flex flex-col group gear-container items-center text-white shadow-md cursor-pointer',
            ]"
          >
            <div class="relative w-full">
              <div class="w-full flex justify-center gear" style="">
                <gear class="grad w-10 md:w-16 transform  group-hover:text-main duration-500 " />
              </div>
            </div>
            <h1 class="text-xl md:text-2xl font-light text-gray-300">
              {{ opcion.titulo }}
            </h1>
            <h3 class="text-md text-gray-400"> {{opcion.texto}}</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Gear from "@/assets/icons/gear.vue";
import Title from './Title.vue';
export default {
  components: {
    Gear,
    Title
  },
  setup() {
    const opciones = [
      {
        id: "gestion",
        img: "https://pomakana.com/images/icons/gestiononline.png",
        titulo: "Gestión",
        texto: "Texto - Sistemas de Gestión.",
      },
      {
        id: "web",
        img: "https://pomakana.com/images/icons/web.png",
        titulo: "Websites",
        texto: "Texto - Páginas web.",
      },
      {
        id: "marketing",
        img: "https://pomakana.com/images/icons/seo.png",
        titulo: "Marketing",
        texto: "Texto - Marketing de contenido.",
      },
      {
        id: "comunicacion",
        img: "https://pomakana.com/images/icons/consult.png",
        titulo: "Comunicación",
        texto: "Texto - Comunicación digital.",
      },
    ];

    return { opciones };
  },
};
</script>


<style >
.gear-container:hover .gear{
  animation: float 3s ease-in-out infinite;	transform: translatey(0px);   
}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
}
</style>