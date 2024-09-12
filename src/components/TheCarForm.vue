<template>
  <form @submit.prevent="submit">
    <input type="text" name="model" placeholder="model" required v-model.trim.lazy="model" />
    <input type="text" name="color" placeholder="color" required v-model.trim.lazy="color" />
    <input type="number" name="price" placeholder="price" required v-model.number.lazy="price" />
    <button>Save</button>
  </form>
</template>

<script>
import URL from '/local/url.js';

const init = {
  model: '',
  color: '',
  price: null,
};

export default {
  data() {
    return {
      model: init.model,
      color: init.color,
      price: init.price,
    };
  },
  methods: {
    clear() {
      this.model = init.model;
      this.color = init.color;
      this.price = init.price;
    },
    submit() {
      const data = {
        model: this.model,
        color: this.color,
        price: this.price,
      };
      this.clear();
      this.save(data);
    },
    async save(data) {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        const id = await response.json();
        console.log(id);
      } else {
        alert('Ошибка HTTP: ' + response.status);
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 80%;
  height: 50dvh;
  margin: 0 auto;
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 10rem;
}

input {
  font-size: inherit;
  color: inherit;
  padding: 1.5rem;
}

button {
  max-width: 6rem;
  background-color: chocolate;
}
</style>
