new Vue({
    el: "#app",
    data: {
        currentView: 'square'
    },
    components: {
        square: {
            template: '#square-template'
        },
        triangle: {
            template: '#triangle-template'
        },
        circle: {
            template: '#circle-template'
        },
        egg: {
            template: '#egg-template'
        }
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    }
})