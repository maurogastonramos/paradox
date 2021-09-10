<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="140"
    height="122"
    class="hexagon"
    viewbox="0 0 140 121.2435565298214"
  >
    <path
      stroke="currentColor"
      stroke-width="3"
      d="M0 60.6217782649107L35 0L105 0L140 60.6217782649107L105 121.2435565298214L35 121.2435565298214Z"
    ></path>


    <foreignObject x="0" y="0" width="140" height="120">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        class="h-full w-full flex justify-center items-center"
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
svg:hover {
}

.hexagon:hover {
  stroke-dasharray: 420;
  stroke-dashoffset: 420;
  animation: rotate 1s linear forwards, glow 2s 1s infinite;
}

@keyframes rotate {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes glow {
  0%, 100% {
    filter: drop-shadow(rgba(45, 204, 193, 0.6) 0px 0px 10px);
  }
  50% {
    filter: drop-shadow(rgba(45, 204, 193, 1) 0px 0px 20px);
  }
}
</style>