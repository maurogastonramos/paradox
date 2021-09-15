<template>
  <div
    class="w-full h-full flex justify-center items-center flex-col select-none bg-black z-50 pointer-events-none"
  >
    <img
      data-aos="fade-down"
      data-aos-duration="1000"
      alt="Paradox logo"
      src="@/assets/logo.png"
      class="z-10 w-2/3"
    />
    <div class="z-10 text-white ">
      <p
        data-aos="fade-in"
        data-aos-delay="1000"
        data-aos-duration="2000"
        class="text-2xl md:text-4xl font-title"
      >
        Iniciá tu transformación digital
      </p>
      <!-- <p
        data-aos="fade-in"
        data-aos-delay="1500"
        data-aos-duration="2000"
        class="text-md md:text-xl  text-gray-100"
      >
        Adelantate al futuro
      </p> -->
    </div>

    <div
      data-aos="fade-in"
      data-aos-delay="3000"
      data-aos-duration="2000"
      class="relative z-10 mx-4 mt-10 sm:mx-0"
    >
      <img class="w-8 absolute top-0 left-0 z-10" src="@/assets/quote.svg" />
      <div
        class="my-5 py-2 px-8 text-white rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm z-10"
      >
        <p class="text-sm"> 
          <!--  font-texto -->
          Si buscás resultados distintos, no hagas siempre lo mismo
        </p>
        <p class="w-full text-right" style="font-family:'Baloo Tamma 2';">
          - Albert Einstein
        </p>
      </div>
    </div>
    <div class="absolute bottom-10" id="main"></div>

    <!-- <div class="hidden md:block animate-bounce absolute bottom-5 z-10">
      <a href="#main">
        <img
          src="@/assets/arrow.svg"
          class="w-10 p-0 border rounded-full m-4"
        />
      </a>
    </div> -->

  </div>
  <!-- <stars-background /> -->


</template>

<script>
export default {
  components: {
  },
  setup() {},
};
</script>
