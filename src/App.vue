
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
        <SearchBar v-model="searchParams"/>
      </div>
      <div>
        <Gif/>
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
import Gif from './app/components/Gif.vue';
import GifList from './app/components/GifList.vue';
import SearchBar from './app/components/SearchBar.vue';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: { Gif, GifList, SearchBar },
  data () {
    return {
      searchParams: {},
    }
  },
  computed: {
  },
  watch:{
    searchParams: (value) => {
      console.log(this.a.methods)
      this.a.methods.getGifs(value.query);
    }
  },
  methods: {
    ...mapActions('GifStore', ['getGifs']),
  }
}
</script>
