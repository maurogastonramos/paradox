<template>
    <h1
      class="text-3xl md:text-4xl xl:text-5xl filter font-title"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      {{title}}
    </h1>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {},
};
</script>