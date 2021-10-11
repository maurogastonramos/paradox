<template>
  <div class="container mx-auto py-10 select-none text-white">
    <Title title="Nuestros clientes" />
    <div
      class="
        w-full
        flex flex-wrap
        justify-center
        pt-16
        pb-5
        items-center
        gap-4
        md:gap-x-6 md:gap-y-6
      "
    >
      <a
        v-for="(cliente, index) in clientes"
        :key="index"
        :class="[
          'w-28 h-12 md:w-48 md:h-16 flex justify-center items-center transition duration-500 hover:scale-110 transform z-50',
        ]"
        :style="{ padding: cliente.padding }"
        :href="cliente.url"
        target="_blank"
      >
        <img
          :src="require('../assets/clientes/' + cliente.img)"
          class="
            w-full
            h-auto
            max-h-full
            filter
            drop-shadow-lg
            object-contain
            cliente
            transition
            duration-300
          "
          :style="{ filter: cliente.filter }"
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
      {
        nombre: "Feli",
        img: "feli.png",
        url: "https://www.feli.com.uy",
        filter: "brightness(0.8) saturate(0) opacity(1)",
      },
      {
        nombre: "Rumbo",
        img: "rumbo.png",
        url: "https://www.rumbosrl.com.ar",
        padding: ".6rem",
        filter: "brightness(3) saturate(0) opacity(0.8)",
      },
      {
        nombre: "We Golf",
        img: "wegolf.png",
        url: "https://www.we.golf",
        filter: "brightness(3) saturate(0) opacity(0.8)",
      },
      {
        nombre: "Enseñanza con sentido",
        img: "ensenianzaconsentido.png",
        url: "https://ensenanzaconsentido.com.ar",
        padding: ".3rem 0",
        filter: "brightness(1) saturate(0) opacity(.9)",
      },
      {
        nombre: "El Trebol",
        img: "eltrebol.png",
        url: "https://eltrebolpremiumstore.com.ar",
        padding: ".2rem 0",
        filter: "brightness(.9) saturate(0) opacity(.9)",
      },
      {
        nombre: "Todo Metabo",
        img: "metabo.png",
        url: "https://todometabo.com.ar",
        padding: ".8rem",
        filter: "brightness(.8) saturate(0) opacity(.9)",
      },
      {
        nombre: "Instituto de cálculo",
        img: "ic.png",
        url: "https://www.ic.fcen.uba.ar",
        filter: "brightness(.9) saturate(0) opacity(.9)",
      },
      {
        nombre: "Rolic",
        img: "rolic.png",
        url: "https://www.rolic.com.ar",
        padding: ".4rem",
        filter: "brightness(.8) saturate(0) opacity(.9)",
      },
      {
        nombre: "Porcinos",
        img: "porcinos.png",
        url: "http://porcinos.org.ar",
        padding: "0.2rem",
        filter: 'brightness(.9) saturate(0) opacity(.9)'
      },
      { nombre: "Gruposi", img: "gruposi.png", url: "http://gruposi.com.ar", filter: 'brightness(1.4) saturate(0) opacity(.9)' },
      {
        nombre: "Learnba",
        img: "learnba.png",
        url: "http://learnba.pomakana.com",
        filter: 'brightness(.8) saturate(0) opacity(.9)'
      },
      {
        nombre: "Todohusqvarna",
        img: "todohusqvarna.png",
        url: "https://www.todohusqvarna.com.ar/jardin/home",
        padding: "0 .7rem",
        filter: 'brightness(.8) saturate(0) opacity(.9)'
      },
      {
        nombre: "Varteco",
        img: "varteco.png",
        url: "http://varteco.com.ar",
        padding: "0 .7rem",
        filter: 'brightness(1.9) saturate(0) opacity(1)'
      },
      {
        nombre: "El Vagón",
        img: "elvagon.png",
        url: "http://elvagon.pomakana.com",

        filter: 'brightness(.8) saturate(0) opacity(.9)'
      },
      {
        nombre: "Gstarcad",
        img: "gstarcad.png",
        url: "https://gstarcad.com.ar",
        padding: "0 .4rem",
        filter: 'brightness(2) saturate(0) opacity(.9)'
      },
      {
        nombre: "Molamaq",
        img: "molamaq.png",
        url: "https://www.molamaq.com/jardin/home",
        padding: "0 .5rem",
        filter: 'brightness(3.5) saturate(0) opacity(.9)'
      },
      {
        nombre: "Solo Playa Argentina",
        img: "soloplaya.png",
        url: "http://www.soloplayaargentina.com.ar",
        padding: "0 .5rem",
        filter: 'brightness(1.4) saturate(0) opacity(.9)'
      },
      { nombre: "o2bip", img: "o2bip.png", url: "http://o2bip.pomakana.com", filter: 'brightness(1.4) saturate(0) opacity(.9)'},
      {
        nombre: "eapost",
        img: "eapost.png",
        url: "http://eapost.com.ar",
        padding: "0 .7rem",
        filter: 'brightness(2) saturate(0) opacity(.9)'
      },
      {
        nombre: "Reagens",
        img: "reagens.png",
        url: "http://reagensvarteco.com.ar",
        filter: 'brightness(2) saturate(0) opacity(.9)'
      },
      { nombre: "ad-one", img: "adone.png", url: "https://www.ad-one.com.ar", filter: 'brightness(.8) saturate(0) opacity(.9)' },
      {
        nombre: "Jardines de Garzón",
        img: "jardines.jpg",
        url: "https://www.instagram.com/jardinesdegarzonsrl/",
        filter: 'brightness(1.2) saturate(0) opacity(.9)'
      },
    ];
    return { clientes };
  },
};
</script>

<style scoped>
.cliente:hover {
  filter: none !important;
}
</style>
