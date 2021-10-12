<template>
  <div
    :class="{ 'headroom--unpinned': scrolled }"
    class="
      fixed
      w-full
      h-12
      bg-black
      border-b border-gray-500
      px-5
      py-1
      z-60
      headroom
      header
      flex
      justify-center
      font-texto
    "
    v-on:scroll="handleScroll"
  >
    <div class="max-h-full flex-1">
      <img src="@/assets/logo.png" alt="" class="h-full w-auto" />
    </div>

    <div class="mx-4 flex items-center justify-center">
      <div
        class="
          text-xs
          border border-main
          text-main
          hover:bg-main
          hover:text-white
          cursor-pointer
          transition
          duration-300
          px-1
        "
      >
        ENG
      </div>
    </div>
    <div class="text-gray-400 text-xs flex flex-col md:flex-row justify-center md:items-center md:gap-x-4">
      <p
        class="
          flex
          items-center
          gap-x-0.5
          hover:text-main
          transition
          duration-500
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <a href="mailto:hola@paradox.ar">hola@paradox.ar</a>
      </p>
      <p
        class="
          flex
          items-center
          gap-x-0.5
          hover:text-main
          transition
          duration-500
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
        <a href="tel:+5491169413535">(+54) 911 69413535</a>
      </p>
    </div>

    <!-- <div class="flex justify-center items-center font-title relative top-0.5">
      <a href="./#footer" class="text-white">Contacto</a>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      limitPosition: window.innerHeight,
      scrolled: true,
      lastPosition: 0,
    };
  },

  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // abajo
      }
      this.scrolled = window.scrollY < this.limitPosition;

      if (
        this.lastPosition > window.scrollY &&
        window.scrollY > this.limitPosition
      ) {
        this.scrolled = false;
        // arriba
      }

      this.lastPosition = window.scrollY;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-100%);
}
.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}
</style>
