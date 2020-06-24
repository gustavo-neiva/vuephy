<style scoped>
.navbar{
  height: 5vh;
  width: 100%;
  color: rgb(7, 7, 126);
  background: black;
  margin-top: 0.1rem;
  outline: none;
  border: none;
}
.fa-search  {
  color: #dddddd;
  left: 0;
  margin: 0.3rem 0 0 0.2rem;
  opacity: 0.5
}
.title {
  text-align: center;
}
h1 {
  margin: 0.33rem 1rem 1rem 0.66rem;
}
</style>

<template>
  <div class="navbar">
    <h1 class="title"><strong>VUEPHY</strong></h1>
  </div>
</template>

<script>

export default {
  name: "Navbar"
}
</script>