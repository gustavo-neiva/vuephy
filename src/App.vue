
<style>
body {
  margin:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
}

.selected-gif {
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center;
  height: 90%;
}

@media only screen and (min-width : 1224px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>

<template>
  <div class="wrapper" id="app">
    <div>
      <div>
        <SearchBar/>
      </div>
      <div class="selected-gif">
        <SelectedGif/>
      </div>
    </div>
    <div>
      <div>
        <GifList/>
      </div>
    </div>
  </div>
</template>

<script>
import SelectedGif from './app/components/SelectedGif.vue';
import GifList from './app/components/GifList.vue';
import SearchBar from './app/components/SearchBar.vue';

export default {
  name: 'app',
  components: { SelectedGif, GifList, SearchBar }
}
</script>
