<template>
    <h1
      class="text-4xl md:text-6xl filter"
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