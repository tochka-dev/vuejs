<template>
  <div class="blog">
    <div class="blog__post" v-for="(post, index) in posts">
      <img :src="post.image" alt="">
      <h3>{{ post.title }}</h3>
      <router-link :to="{ name: 'post', params: { id: index } }">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
  var posts = require('../posts')

  module.exports = {
    data: function() {
      return {
        posts: posts
      }
    }
  }
</script>