<style scoped>
 .search-bar {
  height: 100%;
  width: 100%;
  display: block;
  font-family: JosefinSans-Bold;
  font-size: 8.4vh;
  color: #1b3815;
  line-height: 1.2vh;
  outline: none;
  border: none;
 }
</style>

<template>
  <div>
      <input
        v-model="query"
        @input="debounceInput"
        type="text"
        class="search-bar"
        placeholder="Search for Gifs"
      >
  </div>
</template>

<script>
import debounce from 'debounce';
import { mapActions } from 'vuex';

export default {
  name: "SearchBar",
  data() {
    return {
      query: '',
    }
  },
  methods: {
    ...mapActions('GifStore', ['getGifs']),
    debounceInput: debounce(function () {
      if (this.query.length >= 3)
        this.getGifs(this.query);
      }, 700)
  }
}
</script>