<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100vh;
  #app {
    width: 375px;
    height: 100vh;
    background:#222222;
    margin: 0 auto;
  }
}
</style>
