<style scoped>
.header{
  height: 5vh;
  width: 100%;
  color: rgb(5, 5, 200);
  background: black;
  margin-top: 0.1rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-between;
  alight-items: center;
}
.fa-search  {
  color: #dddddd;
  left: 0;
  margin: 0.3rem 0 0 0.2rem;
  opacity: 0.5
}
.description {
  font-size: 1.5rem;
  margin: 0.4rem;
  cursor:pointer;
}
.creator {
  font-size: 0.8rem;
}
@media(max-width : 480px) {
  .creator {
    font-size: 0.65rem;
  }
}
h1 {
  margin: 0.33rem 1rem 1rem 0.66rem;
}
</style>

<template>
  <div class="header">
    <h1 class="title"><strong>VUEPHY</strong></h1>
    <div class="description">
      <div v-if="display" @click="hideWho">Who?</div>
      <div  v-else @click="showWho" class="creator">
        Made with <span role="img" aria-label="corazon">❤️</span> by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/gustavo__neiva">Gustavo Neiva</a>
      </div>
    </div>
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
    hideWho() {
      this.display = false
    },
    showWho() {
      this.display = true
    },
  }
}
</script>