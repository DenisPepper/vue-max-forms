<template>
  <article>
    <h2>Car Info</h2>
    <dl>
      <dt>ID:</dt>
      <dd>{{ id }}</dd>
      <dt>MODEL:</dt>
      <dd>{{ model }}</dd>
      <dt>COLOR:</dt>
      <dd>{{ color }}</dd>
      <dt>PRICE:</dt>
      <dd>{{ price }}</dd>
    </dl>
  </article>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      model: '',
      color: '',
      price: '',
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.model = this.$route.query.model;
    this.color = this.$route.query.color;
    this.price = this.$route.query.price;
  },
};
</script>

<style scoped>
article {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: cadetblue;
  padding: 6rem;
}

dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

dd {
  color: white;
  font-weight: 700;
}
</style>
