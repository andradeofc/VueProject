<template>
  <div>
    <h1>{{msg}}</h1>

    <router-link to="/about">
      <span>Sobre</span>
      <br>
    </router-link>
    <router-link :to="{name: 'Home'}">
      <span>Home</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Page Profile",
      ages: [1, 2, 3]
    };
  }
};
</script>

<style>
</style>