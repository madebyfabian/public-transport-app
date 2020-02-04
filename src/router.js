import Vue from 'vue'
import Router from 'vue-router'
import Departures from './views/departures.view.vue'

import { version as CURR_VERSION } from '../package.json'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/' + CURR_VERSION + '/departures',
      name: 'departures',
      component: Departures
    },
    {
      path: '/' + CURR_VERSION + '/journeys',
      name: 'journeys',
      component: () => import(/* webpackChunkName: "journeys" */ './views/journeys.view.vue'),
      children: [
        {
          path: 'details',
          name: 'journeyDetails',
          component: () => import(/* webpackChunkName: "journeyDetails" */ './views/journeyDetails.view.vue'),
          beforeEnter: async (to, from, next) => {
            // if the referrer is not the journeys page
            if (from.name !== 'journeys') 
              next({ name: 'journeys', query: to.query })
            else
              next()
          }
        }
      ]
    },

    { 
      path: '*',
      redirect: { name: 'departures' }
    },
  ]
})