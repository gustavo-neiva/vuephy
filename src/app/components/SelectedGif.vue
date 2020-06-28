<style scoped>
.mobile-container{
  max-width:7rem;
  max-height:7rem;
  margin: 0.1rem;
}
.container {
  max-width:100%;
  max-height:100%;
}
</style>

<template>
  <div :class="mobile">
    <GifImage :source="gif.gifUrl()"/>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import GifImage from './GifImage.vue';
import { isMobile } from 'mobile-device-detect';

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
    mobile: function() {
      return isMobile ? "mobile-container" : "container"
    }
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