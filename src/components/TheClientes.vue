<template>
  <div class="container mx-auto py-10 select-none text-white">
    <Title title="Nuestros clientes" />
    <div
      class="w-full flex flex-wrap justify-center pt-16 pb-5 items-center gap-x-10 gap-y-6"
    >
      <a
        v-for="(cliente, index) in clientes"
        :key="index"
        class="
          w-20
          h-20
          md:w-48
          md:h-24
          flex
          justify-center
          items-center
          transition
          duration-500
          hover:scale-110
          transform
          z-50
        "
        :href="cliente.url"
        target="_blank"
      >
        <img
          :src="require('../assets/clientes/' + cliente.img)"
          class="w-full h-auto max-h-full filter drop-shadow-lg grayscale hover:filter-none object-contain"
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
      { nombre: "Feli", img: "feli.png", url: "https://www.feli.com.uy" },
      { nombre: "Rumbo", img: "rumbo.png", url: "https://www.rumbosrl.com.ar" },
      { nombre: "We Golf", img: "wegolf.png", url: "https://www.we.golf" },
      {
        nombre: "Enseñanza con sentido",
        img: "ensenianzaconsentido.png",
        url: "https://ensenanzaconsentido.com.ar",
      },
      {
        nombre: "El Trebol",
        img: "eltrebol.png",
        url: "https://eltrebolpremiumstore.com.ar",
      },
      {
        nombre: "Todo Metabo",
        img: "metabo.png",
        url: "https://todometabo.com.ar",
      },
      {
        nombre: "Instituto de cálculo",
        img: "ic.png",
        url: "https://www.ic.fcen.uba.ar",
      },
      { nombre: "Rolic", img: "rolic.png", url: "https://www.rolic.com.ar" },
      {
        nombre: "Porcinos",
        img: "porcinos.png",
        url: "http://porcinos.org.ar",
      },
      {
        nombre: "Learnba",
        img: "learnba.png",
        url: "http://learnba.pomakana.com",
      },
      { nombre: "Gruposi", img: "gruposi.png", url: "http://gruposi.com.ar" },
      {
        nombre: "Todohusqvarna",
        img: "todohusqvarna.png",
        url: "https://www.todohusqvarna.com.ar/jardin/home",
      },
      { nombre: "Varteco", img: "varteco.png", url: "http://varteco.com.ar" },
      {
        nombre: "El Vagón",
        img: "elvagon.png",
        url: "http://elvagon.pomakana.com",
      },
      {
        nombre: "Gstarcad",
        img: "gstarcad.png",
        url: "https://gstarcad.com.ar",
      },
      {
        nombre: "Molamaq",
        img: "molamaq.png",
        url: "https://www.molamaq.com/jardin/home",
      },
      {
        nombre: "ceecs",
        img: "ceecs.png",
        url: "https://www.ic.fcen.uba.ar/ceecs/home",
      },
      {
        nombre: "Solo Playa Argentina",
        img: "soloplaya.png",
        url: "http://www.soloplayaargentina.com.ar",
      },
      { nombre: "o2bip", img: "o2bip.png", url: "http://o2bip.pomakana.com" },
      { nombre: "eapost", img: "eapost.png", url: "http://eapost.com.ar" },
      {
        nombre: "Reagens",
        img: "reagens.png",
        url: "http://reagensvarteco.com.ar",
      },
      { nombre: "ad-one", img: "adone.png", url: "https://www.ad-one.com.ar" },
      {
        nombre: "Jardines de Garzón",
        img: "jardines.jpg",
        url: "https://www.instagram.com/jardinesdegarzonsrl/",
      },
    ];
    return { clientes };
  },
};
</script>

<style scoped>
</style>
