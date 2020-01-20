
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

.wrapper {
  background: lightgrey;
  display: grid;
  grid-template-columns: 50% 50%;
}

.first-column {
  display: grid;
  grid-template-rows: 10% 90%;
}

#search-bar {
  border: 1px solid #000;
}

#gif {
  border: 1px solid #000;
}

#gif-list {
  border: 1px solid #000;
  height: 100%;
}

</style>

<template>
  <div class="wrapper" id="app">
    <div class="first-column">
      <div id="search-bar">
        <SearchBar/>
      </div>
      <div id="gif">
        <Gif/>
      </div>
    </div>
    <div class="second-column">
      <div id="gif-list">
        <GifList/>
      </div>
    </div>
  </div>
</template>

<script>
import Gif from './app/components/Gif.vue';
import GifList from './app/components/GifList.vue';
import SearchBar from './app/components/SearchBar.vue';

export default {
  name: 'app',
  components: { Gif, GifList, SearchBar },
  data () {
    return {
    }
  }
}
</script>
