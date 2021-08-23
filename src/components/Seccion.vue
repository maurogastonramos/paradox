<template>
  <div class="relative">
    <div
      :class="`${paleta[seccion.theme].background} w-full h-36 relative top-14`"
      style="transform: skewY(-3deg);"
    ></div>
    <div
      :class="
        `${paleta[seccion.theme].background} 
      ${paleta[seccion.theme].text} 
      relative w-full px-8 pb-8 z-10`
      "
    >
      <h1
        class="text-6xl"
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        {{ seccion.titulo }}
      </h1>

      <div :class="`container mx-auto mt-10 text-left`">
        <div
          v-for="(texto, index) in seccion.textos"
          :key="index"
          data-aos="fade-right"
          :data-aos-delay="(index + 1) * 100"
          data-aos-duration="1000"
          data-aos-once="true"
          class="my-3"
        >
          <p class="font-bold">{{ texto.titulo }}</p>
          <p>{{ texto.texto }}</p>
        </div>
      </div>
    </div>
    <div
      v-if="!last"
      :class="
        `${paleta[seccion.theme].background} w-full h-36 absolute -bottom-14`
      "
      style="transform: skewY(-3deg);"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    seccion: {
      type: Object,
      required: true,
    },
    last: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    const paleta = {
      dark: {
        background: "bg-gray-900",
        text: "text-white",
      },
      light: {
        background: "bg-white",
        text: "text-gray-900",
      },
    };

    return { paleta };
  },
};
</script>
