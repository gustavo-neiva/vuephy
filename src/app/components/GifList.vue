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
        <img class='gif' :src="gif.gifUrl()" alt="">
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

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
    mounted(){
      this.gifList = this.gifs 
    }
}
</script>