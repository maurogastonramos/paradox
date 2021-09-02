<template>
  <div class="container mx-auto py-10 select-none">
    <Title title="Nuestros clientes" />
    <div class="w-full flex flex-wrap justify-center py-5 items-center gap-x-5">
      <a
        v-for="(cliente, index) in clientes"
        :key="index"
        class="w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
        :href="cliente.url"
        target="_blank"
      >
        <img :src="require('../assets/clientes/' + cliente.img)" class="filter grayscale transform hover:-translate-y-3 duration-500 transition" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';
export default {
  components: {Title},
  setup() {
    const clientes = [
        {img: "feli.png", url:'https://www.feli.com.uy'},
        {img: "rumbo.png", url:'https://www.rumbosrl.com.ar'}, 
        {img:"wegolf.png", url:'https://www.we.golf'}
    ];
    return { clientes };
  },
};
</script>

<style scoped>

</style>
