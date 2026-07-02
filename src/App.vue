<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body {
  font-family: sans-serif;
  background-color: #f7fafc;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
