<template>
  <div class="center">
    <form class="centerVert">
      <my-input v-model="post.title" type="text"/>
      <my-input v-model="post.body" type="text"/>
      <my-button @click.prevent="createpost">Go</my-button>
    </form>
  </div>
</template>

<script>

export default {
  components: {},

  data(){
    return{
      post:{
        title:'',
        body:''
      }
    }
  },
  methods:{
    createpost(){
      this.$emit('create',this.post),
      this.post={
      title:'',
      body:''
      }
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.centerVert{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>