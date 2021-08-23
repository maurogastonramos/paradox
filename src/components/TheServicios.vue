<template>
  <div class="container mx-auto py-10 select-none">
    <h1 class="text-5xl text-gray-900" style="font-family:'Baloo Tamma 2';">
      Productos
    </h1>
    <div
      class="w-full lg:w-2/3 mx-auto mt-5 px-4 lg:p-0 grid grid-cols-1 sm:grid-cols-2 justify-items-stretch gap-x-10 gap-y-10"
    >
      <a
        v-for="(opcion, index) in opciones"
        :key="opcion.id"
        :data-aos="index % 2 ? 'flip-left' : 'flip-right'"
        data-aos-duration="1000"
        data-aos-once="true"
        class="cursor-default"
      >
        <!-- :href="`#${opcion.id}`" -->
        <div
          :class="[
            `bg-${opcion.background}`,
            ' w-full h-full p-4 flex flex-col items-center text-white rounded-md shadow-md group cursor-pointer transform hover:scale-110 transition duration-300',
          ]"
        >
          <h1 class="text-2xl font-semibold">{{ opcion.titulo }}</h1>
          <div class="relative w-full">
            <div class="w-full">
              <img
                :src="opcion.img"
                class="w-20 mx-auto filter invert my-6 group-hover:opacity-0 transition-opacity duration-100"
              />
            </div>

            <div class="w-full h-full absolute top-0 p-4 flex items-center">
              <p
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-100"
              >
                {{ opcion.texto }}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const opciones = [
      {
        id: "gestion",
        img: "https://pomakana.com/images/icons/gestiononline.png",
        background: "main",
        titulo: "Sistemas de gestión",
        texto: "Texto - Sistemas de Gestión.",
      },
      {
        id: "web",
        background: "secondary",
        img: "https://pomakana.com/images/icons/web.png",
        titulo: "Páginas web",
        texto: "Texto - Páginas web.",
      },
      {
        id: "marketing",
        img: "https://pomakana.com/images/icons/seo.png",
        background: "secondary",
        titulo: "Marketing de contenido",
        texto: "Texto - Marketing de contenido.",
      },
      {
        id: "comunicacion",
        background: "main",
        img: "https://pomakana.com/images/icons/consult.png",
        titulo: "Comunicación digital",
        texto: "Texto - Comunicación digital.",
      },
    ];

    return { opciones };
  },
};
</script>
