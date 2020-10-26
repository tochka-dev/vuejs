<template>
  <div class="post" v-if="post">
    <img :src="post.image" alt="">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
  var posts = require('../posts')

  module.exports = {
    data: function() {
      return {
        posts: posts,
        post: null
      }
    },
    created: function() {
      var postId = this.$route.params.id

      this.post = this.posts[postId]
    }
  }
</script>