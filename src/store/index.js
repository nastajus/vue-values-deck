import Vue from 'vue';
import Vuex from 'vuex';
import assessment from './modules/assessment'

//Load Vuex
Vue.use(Vuex);


// Create store
export default new Vuex.Store({
    modules: {
        assessment
    }
});