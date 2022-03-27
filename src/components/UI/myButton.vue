<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style scoped>
button{
  border: 2px solid darkolivegreen;
  padding: 10px;
  margin: 5px;
}
</style>