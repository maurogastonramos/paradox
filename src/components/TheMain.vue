<template>
  <div
    class="w-full h-full flex justify-center items-center flex-col select-none"
  >
    <img
      data-aos="fade-down"
      data-aos-duration="1000"
      alt="Paradox logo"
      src="@/assets/logo.png"
      class="z-10 w-2/3 max-w-2xl"
    />
    <div class="z-10 text-white" style="font-family:'Baloo Tamma 2';">
      <p
        data-aos="fade-in"
        data-aos-delay="1000"
        data-aos-duration="2000"
        class="text-3xl font-medium"
      >
        Inicia tu transformación digital
      </p>
      <p
        data-aos="fade-in"
        data-aos-delay="1500"
        data-aos-duration="2000"
        class="text-2xl font-light"
      >
        Adelantate al futuro
      </p>
    </div>

    <div
      data-aos="fade-in"
      data-aos-delay="3000"
      data-aos-duration="2000"
      class="relative z-10 mx-4 mt-4 sm:mx-0"
    >
      <img class="w-8 absolute top-0 left-0 z-10" src="@/assets/quote.svg" />
      <div
        class="my-5 py-2 px-8 text-white rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm z-10"
      >
        <p class="text-xl font-medium" style="font-family:'Sans Serif'">
          Si buscás resultados distintos, no hagas siempre lo mismo
        </p>
        <p class="w-full text-right" style="font-family:'Baloo Tamma 2';">
          - Albert Einstein
        </p>
      </div>
      <!-- <img
        class="w-8 transform rotate-180 absolute bottom-0 right-0"
        src="@/assets/quote.svg"
      /> -->
    </div>
    <div class="absolute bottom-10" id="main"></div>

    <div class="hidden md:block animate-bounce absolute bottom-5 z-10">
      <a href="#main">
        <img
          src="@/assets/arrow.svg"
          class="w-10 p-0 border rounded-full m-4"
        />
      </a>
    </div>
  </div>
  <stars-background />
</template>

<script>
import StarsBackground from "./StarsBackground.vue";
export default {
  components: {
    StarsBackground,
  },
  setup() {},
};
</script>
