<template>
  <div class="container mx-auto py-10">
    <div
      class="w-full lg:w-2/3 mx-auto px-4 lg:p-0 grid grid-cols-1 sm:grid-cols-2 justify-items-stretch gap-x-10 gap-y-10"
    >
      <div
        v-for="(opcion, index) in opciones"
        :key="opcion.id"
        class="w-full p-4 flex flex-col items-center text-white rounded-md shadow-md"
        :style="{ 'background-color': opcion.background }"
        :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 class="text-2xl font-semibold">{{ opcion.titulo }}</h1>
        <img :src="opcion.img" class="w-20 filter invert my-6" />
        <p class="w-2/3">
          {{ opcion.texto }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const opciones = [
      {
        id: "desarrollo",
        img: "https://pomakana.com/images/icons/web.png",
        background: "#48ABC2",
        titulo: "DESARROLLO WEB",
        texto:
          "Para todos los dispositivos. Autoadministrable. Diseñamos para atraer a tus clientes.",
      },
      {
        id: "mobile",
        background: "#7C69C3",
        img: "https://pomakana.com/images/icons/web.png",
        titulo: "APLICACIONES MOBILE",
        texto:
          "Diferenciate de la competencia creando las apps que tus clientes necesitan.",
      },
      {
        id: "gestion",
        background: "#7C69C3",
        img: "https://pomakana.com/images/icons/web.png",
        titulo: "GESTIÓN ONLINE",
        texto:
          "Administrá tu negocio (pedidos, cuentas corrientes...) desde donde estés.",
      },
      {
        id: "ecommerce",
        img: "https://pomakana.com/images/icons/web.png",
        background: "#48ABC2",
        titulo: "E-COMMERCE",
        texto:
          "Llevamos tu negocio a la web. Llegá con tus productos y servicios a nuevos clientes.",
      },
    ];

    return { opciones };
  },
};
</script>
