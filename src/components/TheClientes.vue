<template>
  <div class="container mx-auto py-10 select-none text-white">
    <Title title="Nuestros clientes" />
    <div
      class="w-full flex flex-wrap justify-center py-5 items-center gap-x-10"
    >
      <a
        v-for="(cliente, index) in clientes"
        :key="index"
        class="w-32 h-32 md:w-40 md:h-40 flex justify-center items-center hover:animate-float z-50 "
        :href="cliente.url"
        target="_blank"
      >
        <img
          :src="require('../assets/clientes/' + cliente.img)"
          class="
            filter
            grayscale
          "
          :alt="`Logo ${cliente.nombre}`"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
export default {
  components: { Title },
  setup() {
    const clientes = [
      {nombre:"Feli", img: "feli.png", url: "https://www.feli.com.uy" },
      {nombre:"Rumbo", img: "rumbo.png", url: "https://www.rumbosrl.com.ar" },
      {nombre:"We Golf", img: "wegolf.png", url: "https://www.we.golf" },
    ];
    return { clientes };
  },
};
</script>

<style scoped>
</style>
