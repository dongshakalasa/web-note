<template>
  <div id="app">
    <keep-alive include="keepOne">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

  html,body {
    width: 100%;
    height: 100%;
  }

  * {
    padding: 0;
    margin: 0;
  }

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

</style>

