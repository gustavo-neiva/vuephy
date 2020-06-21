<style scoped>
.input-icon i {
  position: absolute;
}
.search-bar {
  height: 100%;
  width: 100%;
  display: block;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  color: lightgrey;
  background: black;
  margin-top: 0.1rem;
  line-height: 6vh;
  outline: none;
  padding: 0 7px;
  border: none;
}
.fa-search  {
  color: #dddddd;
  left: 0;
  margin: 0.3rem 0 0 0.2rem;
  opacity: 0.5
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div>
    <div class="input-icon">
      <transition name="fade">
        <i v-show="icon" class="fa fa-search fa-3x"></i>
      </transition>
      <input
        v-model="query"
        @focus="showIcon(false)"
        @focusout="showIcon(true)"
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
    }, 700),
    showIcon(boolean) {
      if (this.query.length > 0) {
        return this.icon = false;
      }
      this.icon = boolean;
    }
  },
  created() {
    this.getGifs('gif');
  }
}
</script>