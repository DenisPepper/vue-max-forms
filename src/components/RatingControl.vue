<template>
  <ul>
    <li>
      <button :class="{ active: modelValue === 'poor' }" type="button" @click="setActive('poor')">Poor</button>
    </li>
    <li>
      <button :class="{ active: modelValue === 'average' }" type="button" @click="setActive('average')">Average</button>
    </li>
    <li>
      <button :class="{ active: modelValue === 'great' }" type="button" @click="setActive('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // этот проп нужно установить для привязки v-model
  // к пользовтаельскому компоненту RatingControl
  props: ['modelValue'],
  // это событие нужно указать для привязки v-model
  // к пользовтаельскому компоненту RatingControl
  emits: ['update:modelValue'],
  methods: {
    setActive(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style scoped>
.active {
  background-color: chocolate;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
</style>
