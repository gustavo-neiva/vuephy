<style scoped>
.container {
  overflow-y: scroll;
  height: 100vh;
}
.gifList {
  margin: 0.3rem;
}
.gif {
  width: 100%;
  object-fit: cover;
}
</style>

<template>
  <div class="gifList">
    <div class='container'>
      <masonry
        :cols="{default: 3, 700: 2, 400: 1}"
        :gutter="{default: '1rem', 700: '0.2rem'}"
      >
        <div v-for="gif in gifList" :key="gif.id">
          <img class='gif' :src="gif.gifUrl()" @click="select(gif)">
        </div>
      </masonry>
    </div>
  </div>
</template>

<script>
import {  mapState, mapActions } from 'vuex'

export default {
    name: "GifList",
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
      scroll () {
        window.onscroll = () => {
          let pageYOffset = window.pageYOffset;
          let docTop = document.documentElement.scrollTop;
          let bodyTop = document.body.scrollTop;
          let offsetHeight = document.documentElement.offsetHeight;
          let innerHeight = window.innerHeight;
          let bottomOfWindow = Math.max(pageYOffset, docTop, bodyTop) + innerHeight === offsetHeight;
          if (bottomOfWindow) {
            this.scrolledToBottom = true
          }
        }
  	  }
    },
    mounted(){
      this.gifList = this.gifs;
      this.scroll();
    },
    watch: {
      gifs(newGifs) {
        this.gifList = newGifs;
      }
   },
}
</script>