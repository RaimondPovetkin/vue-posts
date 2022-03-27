<template>
  <div >
    <post-item
        v-for="item in posts" :key="item.id"
        :item="item"
        @delete="deletePost"
    />
  </div>
</template>

<script>
import postItem from "@/components/postItem";
export default {
  components: {postItem},

  props:{
    posts:{
      type:Array,

    }
  },
  methods:{
    deletePost(id) {
      this.$emit('delete',id)
    }
  }
}
</script>

<style scoped>

</style>