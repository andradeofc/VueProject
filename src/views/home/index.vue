<template>
  <div id="menu">
    <h1>{{msg}}</h1>
    <router-link to="/about">
      <span>Sobre</span>
      <br>
    </router-link>
    <router-link to="/profile">
      <span>Perfil</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Page Home",
      ages: [1, 2, 3]
    };
  }
};
</script>

<style>
.menu {
  margin-left: 10px;
}
</style>