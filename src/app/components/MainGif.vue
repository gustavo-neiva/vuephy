<style>

.gif {
  width: 100%;
  height: auto;
  max-width: 70vh;
}

</style>

<template>
  <img class="gif" :src="gif.gifUrl()" alt="">
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "MainGif",
  data() {
    return {
      gif: '',
    }
  },
  computed: {
    ...mapState('GifStore', ['selectedGif']),
  },
  created() {
    this.gif = this.selectedGif;
  },
  watch: {
    selectedGif(newGif) {
      this.gif = newGif;
    }
  }
}
</script>
