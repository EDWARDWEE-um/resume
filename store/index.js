import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

import common from "./modules/common";

const createStore = () => {
    return new Vuex.Store({
        modules: {
            common,
        }
    });
}

export default createStore;