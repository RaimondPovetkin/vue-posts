<template>
  <div>
    <input :value="modelValue" @input="updateInput" />
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props:{
    modelValue:[String,Number]
  },
  methods:{
    updateInput(event)
    {
      this.$emit('update:modelValue', event.target.value)
    }

  }
}
</script>

<style scoped>
input{
  padding: 10px;
  margin: 10px;
}
</style>