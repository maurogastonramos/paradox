<template>
  <div
    :class="{ 'headroom--unpinned': scrolled }"
    class="fixed w-full h-12 bg-black border-b border-gray-500 px-5 py-1 z-50 headroom header"
    v-on:scroll="handleScroll"
  >
    <img src="@/assets/logo.png" class="max-h-full" alt="" />
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
