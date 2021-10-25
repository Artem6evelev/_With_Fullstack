<template>
  <button @click="clicked">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    clicked () {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
