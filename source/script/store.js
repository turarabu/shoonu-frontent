import Vue from 'vue'
import Vuex from 'vuex'

import dailyOffers from './data/dailyOffers'

export default storage() 

function storage () {
    const store = getStore()
    Vue.use(Vuex)

    return new Vuex.Store(store)
}

function getStore () {
    return {
        state: {},
        mutations: {},
        actions: {},
        modules: { dailyOffers }
    }
}