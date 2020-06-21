<style scoped>
.container {
  overflow-y: scroll;
  height: 99vh;
}
</style>

<template>
  <div>
    <div @scroll="onScroll" class='container'>
      <masonry
        :cols="{default: 5, 800: 4, 600: 3, 480: 2}"
        :gutter="5"
      >
        <div v-for="gif in gifList" :key="gif.id">
          <GifImage :source="gif.gifUrl()" @click.native="select(gif)"/>
        </div>
      </masonry>
    </div>
  </div>
</template>

<script>
import {  mapState, mapActions } from 'vuex'
import GifImage from './GifImage.vue';

export default {
  name: "GifList",
  components:  { GifImage },
  data() {
    return {
      gifList: [],
    }
  },
  computed: {
    ...mapState('GifStore', ['gifs']),
  },
  methods: {
    ...mapActions('GifStore', ['selectGif', 'searchMore']),
    select(gif) {
      this.selectGif(gif);
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight }}) {
      console.log('scrolllandooo')
      if (scrollTop + clientHeight >= scrollHeight) {
        this.searchMore()
      }
    }
  },
  mounted(){
    this.gifList = this.gifs;
  },
  watch: {
    gifs(newGifs) {
      this.gifList = newGifs;
    }
  },
}
</script>