<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    class="hexagon"
    viewBox="-2 0 144 124"
  >
    <path
      stroke="currentColor"
      stroke-width="3"
      d="M0 60.6217782649107L35 0L105 0L140 60.6217782649107L105 121.2435565298214L35 121.2435565298214Z"
    ></path>


    <foreignObject x="0" y="0" width="142" height="124">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        class="h-full w-full flex justify-center items-center p-4 text-md"
        style="font-size:0.9rem"
      >
        <slot />
      </div>
    </foreignObject>
  </svg>
</template>

<script>
export default {};
</script>

<style scoped>


/* Dibujado de stroke */
/* .hexagon:hover {
  stroke-dasharray: 420;
  stroke-dashoffset: 420;
  animation: dibujado 1s linear forwards, glow 2s 1s infinite;
}
@keyframes dibujado {
  to {
    stroke-dashoffset: 0;
  }
} */

.hexagon:hover {
  animation: glow 2s infinite;
}
@keyframes glow {
  0%, 100% {
    filter: drop-shadow(rgba(45, 204, 193, 0.2) 0px 0px 10px);
  }
  50% {
    filter: drop-shadow(rgba(45, 204, 193, 1) 0px 0px 20px);
  }
}
</style>