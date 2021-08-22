<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <img
      data-aos="fade-down"
      data-aos-duration="2000"
      alt="Paradox logo"
      src="@/assets/logo.png"
      class="z-10 w-2/3 xl:w-1/3"
    />
    <div class="z-10 text-white" style="font-family:'Teko';">
      <p
        data-aos="fade-in"
        data-aos-delay="2000"
        data-aos-duration="2000"
        class="text-3xl font-medium"
      >
        Inicia tu transformación digital
      </p>
      <p
        data-aos="fade-in"
        data-aos-delay="2000"
        data-aos-duration="2000"
        class="text-2xl font-light"
      >
        Adelantate al futuro
      </p>
    </div>

    <div
      data-aos="fade-up"
      data-aos-delay="3000"
      data-aos-duration="2000"
      class="relative z-10 mx-4 sm:mx-0"
    >
      <img class="w-10 absolute top-0 left-0" src="@/assets/quote.svg" />
      <div
        class="my-5 p-4 bg-white text-black rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm z-10"
      >
        <p class="text-4xl font-medium" style="font-family:'Tangerine'">
          Si buscás resultados distintos, no hagas siempre lo mismo
        </p>
        <p class="w-full text-right">
          - Albert Einstein
        </p>
      </div>
      <img
        class="w-10 transform rotate-180 absolute bottom-0 right-0"
        src="@/assets/quote.svg"
      />
    </div>

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
