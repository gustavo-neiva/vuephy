<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  overflow-y: scroll;
  grid-auto-rows: min-content;
  height: 100vh;
}

.gif {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<template>
    <div class='container'>
      <div v-for="gif in gifList" :key="gif.id">
        <img class='gif' :src="gif.gifUrl()" @click="select(gif)">
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
      ...mapActions('GifStore', ['selectGif']),
      select(gif) {
        console.log('cliquei')
        console.log(gif)
        this.selectGif(gif);
      },
    },
    mounted(){
      this.gifList = this.gifs;
    },
    watch: {
      gifs(newGifs) {
        this.gifList = newGifs;
      }
   }
}
</script>