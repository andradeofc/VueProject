<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link :to="{name: 'Home'}">
      <span>Home</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Page About"
    };
  }
};
</script>

<style>
</style>