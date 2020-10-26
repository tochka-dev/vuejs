<template lang="pug">
.Browser
    .Browser__toolbar.Toolbar
        .Toolbar__controls
            .Toolbar__btn.Toolbar__btn
            .Toolbar__btn.Toolbar__btn
            .Toolbar__btn.Toolbar__btn
        input.Toolbar__input(type="text",:value="url",@keyup.enter="dispatchUrl()")
    .Browser__body
        slot
</template>

<script>
export default {
    props: ['uri'],
    computed: {
        url() {
            return 'http://example.ru'
        }
    }
}
</script>

<style lang="sass">
    .Browser
        width: 590px
        height: 320px
        background-color: #fff
        box-shadow: 0 2px 4px rgba(0,0,0,.28)
        border-radius: 5px
        margin-bottom: 40px

    .Browser__toolbar
        background-color: #fff
        width: 100%
        height: 41px
        border-top-left-radius: 5px
        border-top-right-radius: 5px
        padding: 5px 10px 0 0
        border-bottom: 1px solid #f5f5f5
    
    .Toolbar__controls
        display: flex
        justify-content: center
        align-items: center
        width: 75px
        height: 31px
        float: left

    .Toolbar__btn
        width: 9px
        height: 9px
        border-radius: 50%
        margin: 0 3px
        background-color: #e2e2e2

    .Toolbar__input
        width: 445px
        height: 32px
        border-radius: 2px
        font-size: 13px
        border: none
        margin: 0
        padding: 0 3px
        outline: none
        color: #b5b5b5

    .Browser__body
        padding: 20px 30px
        overflow: scroll 
        color: #979da0
        font-size: 13px
        height: 280px
        width: 100%
        position: relative

        pre
            white-space: pre-wrap
            font-family: 'PT Mono', monospace
</style>