<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :class="[{'withImage': withImage},'hexagon group overflow-visible']"
    viewBox="-2 0 144 124"
  >
    <!-- Sin Imagen -->
    <path
      stroke="currentColor"
      stroke-width="3"
      class="z-50"
      d="M0 60.6217782649107L35 0L105 0L140 60.6217782649107L105 121.2435565298214L35 121.2435565298214Z"
    ></path>
    <foreignObject x="0" y="0" width="142" height="124">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        class="h-full w-full flex justify-center items-center p-4 text-md"
        style="font-size: 0.9rem"
      >
        <slot />
      </div>
    </foreignObject>

    <!-- Con imagen -->
    <defs v-if="withImage">
      <clipPath id="circleView">
        <path
          stroke=""
          d="M0 60.6217782649107L35 0L105 0L140 60.6217782649107L105 121.2435565298214L35 121.2435565298214Z"
        ></path>
      </clipPath>
    </defs>
    <image
      v-if="withImage"
      x="-2"
      y="0"
      class="w-full h-full z-10"
      preserveAspectRatio="xMinYMin slice"
      :xlink:href="require('../assets/equipo/' + image + '1.jpg')"
      clip-path="url(#circleView)"
    />
    <image
      v-if="withImage"
      x="-2"
      y="0"
      class="
        opacity-0
        group-hover:grayscale-0 group-hover:opacity-100
        w-full
        h-full
        z-20
      "
      preserveAspectRatio="xMinYMin slice"
      :xlink:href="require('../assets/equipo/' + image + '2.jpg')"
      clip-path="url(#circleView)"
    />
    <path
      v-if="withImage"
      stroke="currentColor"
      stroke-width="3"
      fill="transparent"
      class="z-50"
      d="M0 60.6217782649107L35 0L105 0L140 60.6217782649107L105 121.2435565298214L35 121.2435565298214Z"
    ></path>
    <foreignObject x="0" y="0" width="142" height="124">
      <div
        v-if="withImage"
        xmlns="http://www.w3.org/1999/xhtml"
        class="h-full w-full flex justify-center items-end p-4 text-xl
        opacity-0
        group-hover:opacity-100"
      >
        <div
          style="text-shadow: rgb(0 0 0) -1px 1px 1px, black 0px 0px 3px, white 1px 1px 13px;"
          class="font-title"
        >
          {{ nombre }}
        </div>
      </div>
    </foreignObject>

  </svg>
</template>

<script>
export default {
  props: {
    withImage: {
      type: Boolean,
      required: false,
      default: false,
    },
    image: {
      required: false,
    },
    nombre: {
      required: false
    }
  },
};
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

.hexagon.withImage:hover {
  animation: glow 3s infinite;
}
.hexagon:not(.withImage):hover {
  animation: glow-low 2s infinite;
}
@keyframes glow {
  0%,
  100% {
    filter: drop-shadow(rgba(45, 204, 193, 0.2) 0px 0px 10px);
  }
  50% {
    filter: drop-shadow(rgba(45, 204, 193, 1) 0px 0px 35px);
  }
}
@keyframes glow-low {
  0%,
  100% {
    filter: drop-shadow(rgba(45, 204, 193, 0.2) 0px 0px 10px);
  }
  50% {
    filter: drop-shadow(rgba(45, 204, 193, 1) 0px 0px 20px);
  }
}
</style>