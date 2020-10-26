<template lang="jade">
    h1 {{ greeting }}
</template>

<script>
    module.exports = {
        data: function() {
            return {
                greeting: 'Привет Webpack'
            }
        }
    }
</script>

<style lang="sass?indentedSyntax=true">
    h1
        display: block
        position: absolute
        width: 500px
        height: 100px
        top: 50%
        left: 50%
        margin: -50px 0 0 -250px
        font-size: 54px
        line-height: 64px
        font-family: 'Open Sans', sans-serif
        font-weight: 300
        color: #525255
        text-align: center
</style>