var Vue = require('vue')
var hello = require('./components/hello.vue')

new Vue({
    el: 'body',
    components: {
        hello: hello
    }
})