<style scoped>
.header{
  height: 3rem;
  width: 100%;
  color: rgb(5, 5, 200);
  background: black;
  margin: 0.2rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
}
.creator {
  font-size: 0.8rem;
}
@media(max-width : 480px) {
  .creator {
    font-size: 0.65rem;
  }
  .description {
    font-size: 1rem;
    margin: 0.5rem;
  }
  .header {
    height: 5vh;
    width: 100%;
    color: rgb(5, 5, 200);
    margin-top: 0.1rem;
  }
}
h1 {
  margin: 0;
  cursor: pointer;
}
h2 {
  margin-top: 0.5rem;
}
</style>

<template>
  <div class="header">
    <h1 v-if="display" @click="hide" class="title"><strong>VUEPHY</strong></h1>
    <h2  v-else @click="show" class="creator">
      Made with <span role="img" aria-label="corazon">❤️</span> by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/gustavo__neiva">Gustavo Neiva</a>
    </h2>
  </div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      display: true,
    }
  },
  methods: {
    hide() {
      this.display = false
    },
    show() {
      this.display = true
    },
  }
}
</script>