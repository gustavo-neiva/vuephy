<style scoped>
 .search-bar {
  height: 100%;
  width: 100%;
  display: block;
  font-family: JosefinSans-Bold;
  font-size: 10vh;
  color: lightgrey;
  background: black;
  line-height: 6vh;
  outline: none;
  padding: 0 7px;
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
      autofocus
    >
    <i class="fa fa-search"></i>
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