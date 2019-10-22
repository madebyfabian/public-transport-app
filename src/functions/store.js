// read https://vuedose.tips/tips/creating-a-store-without-vuex-in-vue-js-2-6/

import Vue from "vue";

export const store = Vue.observable({
  selectedJourneyData: null,
  selectedJourneyUUID: ''
});

export const mutations = {
  updateUUID() {
    const newUUID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    return newUUID
  }
}