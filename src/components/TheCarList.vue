<template>
  <section>
    <div v-if="isLoading">Loading ...</div>
    <ul>
      <li v-for="car of cars" :key="car.id">
        <span>{{ car.id }}</span>
        <span>{{ car.model }}</span>
        <span>{{ car.color }}</span>
        <span>{{ car.price }}</span>
      </li>
    </ul>
    <button @click="download">refresh 🔄️</button>
  </section>
</template>

<script>
import URL from '/local/url.js';

export default {
  data() {
    return {
      cars: [],
      isLoading: false,
    };
  },
  methods: {
    async download() {
      this.isLoading = true;
      const cars = [];
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        for (const key of Object.keys(data)) {
          cars.push({ ...data[key], id: key });
        }
      } else {
        alert('Ошибка HTTP: ' + response.status);
      }

      this.isLoading = false;
      this.cars = cars;
    },
  },
  mounted() {
    this.download();
  },
};
</script>

<style scoped>
section {
  width: 80%;
  height: 50dvh;
  margin: 0 auto;
  background-color: cadetblue;
  position: relative;
}

div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 6rem;
  list-style: none;
  margin: 0;
}

li {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

button {
  position: absolute;
  top: -1rem;
  right: 1rem;
  max-width: 6rem;
  background-color: chocolate;
}
</style>
