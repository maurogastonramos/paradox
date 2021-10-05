<template>
  <div
    class="
      w-full
      h-full
      flex
      justify-center
      items-center
      flex-col
      select-none
      bg-black
      relative
      pointer-events-none
    "
  >
    <div class="w-4/5 sm:w-8/12 md:w-6/12 max-w-screen-md">
      <img
        data-aos="fade-down"
        data-aos-duration="1000"
        alt="Paradox logo"
        src="@/assets/logo.png"
        class="z-10 w-full"
      />
    </div>
    <div class="z-10 text-white">
      <p
        data-aos="fade-in"
        data-aos-delay="1000"
        data-aos-duration="2000"
        class="text-md sm:text-xl lg:text-3xl font-title"
      >
        Iniciá tu transformación digital
      </p>
    </div>

    <div
      data-aos="fade-in"
      data-aos-delay="3000"
      data-aos-duration="2000"
      class="relative z-10 mx-4 md:mt-10 sm:mx-0"
    >
      <div
        class="
          my-5
          py-2
          sm:px-8
          text-center text-xs
          lg:text-lg
          space-y-2
          md:space-y-8
          text-white
          rounded-tr-xl
          relative
          rounded-bl-xl rounded-tl-sm rounded-br-sm
          z-10
        "
      >
        <div
          class="hidden sm:block text-md glitch font-title"
          data-text="Si buscás resultados distintos, no hagas siempre lo mismo"
        >
          Si buscás resultados distintos, no hagas siempre lo mismo
        </div>
        <div
          class="sm:hidden text-md glitch font-title"
          data-text="Si buscás resultados distintos,"
        >
          Si buscás resultados distintos,
        </div>
        <div
          class="sm:hidden text-md glitch font-title"
          data-text="no hagas siempre lo mismo"
        >
          no hagas siempre lo mismo
        </div>
        <p
          class="w-full text-right glitch"
          data-text="- Albert Einstein"
          style="font-family: 'Baloo Tamma 2'"
        >
          - Albert Einstein
        </p>
      </div>
    </div>

      <div class="animate-bounce absolute bottom-5 z-10 cursor-pointer">
        <a href="#main">
          <img
            src="@/assets/chevron-down.svg"
            class="w-10 h-10 p-0 border rounded-full m-4"
          />
        </a>
      </div>

    <div class="absolute bottom-10" id="main"></div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
};
</script>


<style lang="scss" scoped>
@mixin glitchCopy {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch {
  position: relative;
  color: white;
  letter-spacing: 0.1em;
  /* Animation provies a slight random skew. Check bottom of doc
	for more information on how to random skew. */
  animation: glitch-skew 4s infinite linear alternate-reverse;

  // Creates a copy before our text.
  &::before {
    // Duplicates our text with the mixin.
    @include glitchCopy;
    // Scoots text slightly to the left for the color offset.
    left: 2px;
    // Creates the color 'shadow' that happens on the glitch.
    text-shadow: -2px 0 #00ccff;
    /* Creates an initial clip for our glitch. This works in
		a typical top,right,bottom,left fashion and creates a mask
		to only show a certain part of the glitch at a time. */
    clip: rect(44px, 450px, 56px, 0);
    /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
		with an alternating animation to keep things fresh. */
    animation: glitch-anim 6s infinite linear alternate-reverse;
  }

  // Creates a copy after our text. Note comments from ::before.
  &::after {
    @include glitchCopy;
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    animation: glitch-anim2 2s infinite linear alternate-reverse;
  }
}

/* Creates an animation with 20 steaps. For each step, it calculates 
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

// Same deal, just duplicated for ultra randomness.
@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

// Does the same deal as before, but now only skews. Used for main text.
@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}
</style>
