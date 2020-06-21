<template>
  <div class="container">
    <GifImage :source="gif.gifUrl()"/>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import GifImage from './GifImage.vue';

export default {
  name: "SelectedGif",
  components:  { GifImage },
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