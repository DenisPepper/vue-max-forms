<template>
  <CarForm />
</template>

<script>
import CarForm from './components/TheCarForm.vue';

export default {
  components: {
    CarForm,
  },
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
