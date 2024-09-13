<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/add-car">Add new car</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin: 0 auto;
  width: 80%;
  padding: 2rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 2rem;
}

li a:link,
li a:visited {
  color: white;
}

li *:any-link.router-link-active {
  color: white;
  background-color: orangered;
}
</style>
