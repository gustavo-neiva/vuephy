
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background: lightgrey;
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
      <div>
        <MainGif/>
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
import MainGif from './app/components/MainGif.vue';
import GifList from './app/components/GifList.vue';
import SearchBar from './app/components/SearchBar.vue';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: { MainGif, GifList, SearchBar }
}
</script>
