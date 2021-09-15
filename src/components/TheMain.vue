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
      <!-- <img class="w-8 absolute top-0 left-0 z-10" src="@/assets/quote.svg" /> -->
      <div
        class="my-5 py-2 px-8 text-center text-md lg:text-xl space-y-8 text-white rounded-tr-xl relative rounded-bl-xl rounded-tl-sm rounded-br-sm z-10"
      >
        <div class=" glitch font-texto" data-text="Si buscás resultados distintos, no hagas siempre lo mismo"> 
          Si buscás resultados distintos, no hagas siempre lo mismo
        </div>
        <div class="text-sm glitch glitch2" data-text="Si buscás resultados distintos, no hagas siempre lo mismo"> 
          Si buscas resultados distintos, no hagas siempre lo mismo
        </div>
        <div class="text-md glitch font-title" data-text="Si buscás resultados distintos, no hagas siempre lo mismo"> 
          Si buscas resultados distintos, no hagas siempre lo mismo
        </div>
        <p class="w-full text-right glitch" data-text="- Albert Einstein" style="font-family:'Baloo Tamma 2';">
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


<style lang="scss" scoped>

@font-face {
  font-family: 'Nintendoid1';
  font-style: normal;
  font-weight: 400;
  src:  url(data:font/ttf;base64,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) format('woff2');
}

@mixin glitchCopy { 
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
}

.glitch2{
  font-family: "Nintendoid1";
  letter-spacing: 0 !important;
}

.glitch {
	position: relative;
	color: white;
	letter-spacing: .1em;
	/* Animation provies a slight random skew. Check bottom of doc
	for more information on how to random skew. */
	animation: glitch-skew 2s infinite linear alternate-reverse;
	
	// Creates a copy before our text. 
	&::before{
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
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
			transform: skew((random(100) / 100) + deg);
    }
  }
}

// Same deal, just duplicated for ultra randomness.
@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
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
