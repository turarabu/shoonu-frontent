<template lang='pug'>
    
    body#body
        Loading( v-if='loaded === false' )
        router-view( v-else )

</template>

<script>
import Loading from ':src/view/Loading.vue'

export default {
    components: { Loading },
    beforeCreate: init,
    data: function () {
        return {
            // if DOM was completed before
            loaded: this.loaded || false
        }
    }
}

function init () {
    if ( document.readyState === 'complete' )
        return this.loaded = true

    document.addEventListener('readystatechange', event => {
        if ( event.target.readyState === 'complete' )
            this.loaded = true
    })
}
</script>

<style lang='stylus'>
@import '~style/base'
</style>