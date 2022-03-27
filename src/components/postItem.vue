<template>
  <div>
    <div class="wrap" >
      <div>{{ item.title }}</div>
      <div>{{ item.body }}</div>
      <div>{{ item.id }}</div>
      <my-button @click="$emit('delete',item.id)">delete</my-button>
    </div>
  </div>
</template>

<script>

export default {
  components: {},

  props:{
    item:{
      type: Object
    }
  }
}
</script>

<style scoped>
.wrap{
  border: 2px solid green;
  margin: 10px;
}
</style>