<template>
  <div id="app">
    <img width="25%" src="./assets/google.png">
    <h3>Mensagem Fixa</h3>
    <!-- Render component-->
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
