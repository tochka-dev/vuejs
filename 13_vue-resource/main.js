var Vue = require('vue')
var VueResource = require('vue-resource')
var Browser = require('./components/Browser.vue')

Vue.use(VueResource)

new Vue({
    el: 'body',
    components: {
        Browser
    },
    data: {
        endpoint: 'https://jsonplaceholder.typicode.com/posts',
        posts: [],
        post: {}
    },
    computed: {
        resource: function() {
            return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
        }
    },
    methods: {
        savePost: function() {

            this.resource.save(this.post)

        },
        getSinglePost: function() {

            this.resource.get({ id: 1 }).then(function(response) {

                this.post = response.data

            })

        },
        getAllPosts: function() {

            var options = {
                params: {
                    _start: 10,
                    _limit: 5
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            this.resource.get().then(function(response) {

                this.posts = response.data

            }, function(error) {
                // ошибка
            })

        }
    },
    created: function() {
        // this.getSinglePost()
    }
})
