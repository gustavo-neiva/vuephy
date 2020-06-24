<style scoped>
.input-icon i {
  position: absolute;
}
.search-bar {
  height: 100%;
  width: 100%;
  display: block;
  font-size: 2rem;
  color: rgba(110, 110, 110, 0.4);
  background: black;
  margin-top: 0.1rem;
  line-height: 5vh;
  outline: none;
  padding: 0.3rem 1rem;
  border: none;
}
.fa-search  {
  color: rgba(116, 116, 116, 0.4);
  right: 0;
  margin: 0.33rem 0.33rem 0 0;
}
</style>

<template>
  <div>
    <div class="input-icon">
      <i class="fa fa-search fa-2x"></i>
      <input
        v-model="query"
        @input="debounceInput"
        type="text"
        class="search-bar"
        autofocus
      >
    </div>
  </div>
</template>

<script>
import debounce from 'debounce';
import { mapActions } from 'vuex';
import { isMobile } from 'mobile-device-detect';

export default {
  name: "SearchBar",
  data() {
    return {
      query: '',
      icon: true,
    }
  },
  methods: {
    ...mapActions('GifStore', ['getGifs']),
    debounceInput: debounce(function () {
      if (this.query.length >= 3) {
        this.getGifs(this.query);
      }
    }, 700)
  },
  created() {
    this.getGifs('gif');
  }
}
</script>