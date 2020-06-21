<style scoped>
.gif {
  height: auto;
  width: 100%;
}
</style>
<template>
  <div>
    <img
      class="gif"
      v-lazy="source"
    >
  </div>
</template>
<script>
export default {
  name: "GifImage",
  props: {
    source: {
      type: String,
      required: true
    }
  }
};
</script>