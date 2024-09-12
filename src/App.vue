<template>
  <CarForm />
  <CarsList />
</template>

<script>
import CarForm from './components/TheCarForm.vue';
import CarsList from './components/TheCarList.vue';

export default {
  components: {
    CarForm,
    CarsList,
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
