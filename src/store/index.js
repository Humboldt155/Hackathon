import Vue from 'vue'
import Vuex from 'vuex'

import clients from './clients'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      clients
    }
  })

  return Store
}
