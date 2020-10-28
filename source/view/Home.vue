<template lang='pug'>
    
    div#home
        Carousel
            //- Offer( v-for='offer of dailyOffers' v-bind='{ offer }' :key='offer.id' )
            
</template>

<script>
import Carousel from ':ui-kit/Carousel/Index'
// import Offer from ':ui-kit/Offer/Circle'

export default {
    components: { Carousel },
    computed: { dailyOffers }
}

// computed
function dailyOffers () {
    return this.$store.state.dailyOffers
}
</script>