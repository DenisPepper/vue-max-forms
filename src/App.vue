<template>
  <Navigation />
  <router-view> </router-view>
</template>

<script>
import Navigation from './components/AppNavigation.vue';

export default {
  components: { Navigation },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>
