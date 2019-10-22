import Vue from 'vue'
import Router from 'vue-router'
import Departures from './views/Departures.view.vue'

Vue.use(Router)

const CURR_VERSION = '2.0',
      MAIN_PATH = `/${CURR_VERSION}`

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: MAIN_PATH + '/departures',
      name: 'departures',
      component: Departures
    },
    {
      path: MAIN_PATH + '/journeys',
      name: 'journeys',
      component: () => import(/* webpackChunkName: "journeys" */ './views/Journeys/_Journeys.view.vue'),
      children: [
        {
          path: 'details',
          name: 'journeyDetails',
          component: () => import(/* webpackChunkName: "journeyDetails" */ './views/JourneyDetails/_JourneyDetails.view.vue'),
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

    { path: '*', redirect: { name: 'departures' } },
  ]
})

export default router
