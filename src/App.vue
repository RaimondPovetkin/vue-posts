<template>
  <div>
    <my-button @click="fetchPosts">Get</my-button>
    <my-button
        @click="showDialog"
    >
      Create post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createNewPost"
      />
    </my-dialog>
    <post-list
      v-if="!isPostLoading"
      v-show="posts.length > 0"
      :posts="posts"
      @delete="deletePost"
    />
    <div v-else>Loading...</div>
    <div v-show="posts.length == 0">
      <h1 style="color: red">Нет постов</h1>
    </div>

  </div>
</template>

<script>
import postForm from "@/components/postForm";
import postList from "@/components/postList";
import MyButton from "@/components/UI/myButton";
import axios from 'axios';

export default {
  components: {
    MyButton, postForm, postList
  },


  data(){
    return{
      posts:[
/*        {id:1,title:"php",body:"description gdgfgfdgdf"},
        {id:2,title:"js",body:"description bvcbnvx"},
        {id:3,title:"python",body:"description qwqwewqeqw"},*/
      ],
      id:4,
      dialogVisible:false,
      isPostLoading:false
    }
  },
  methods:{
    createNewPost(post){
      post.id=this.id
      this.posts.push(post)
      this.id++
      this.dialogVisible =false
    },
    showDialog(){
      this.dialogVisible =true
    },
    deletePost(id){
      for (let i=0;i<this.posts.length;i++){
        if(this.posts[i].id == id){
          this.posts.splice(i,1)
        }
      }
    },
    async fetchPosts(){
      try {
        this.isPostLoading=true
        setTimeout(async ()=>{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts=response.data
          this.isPostLoading=false
        },1000)


      } catch (e){
        alert("error")
      }
    },
    check(v){
      let str=v.replace(/[^a-z]/g, '').toUpperCase()
      let ti=this.title
      this.title=ti+str
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>