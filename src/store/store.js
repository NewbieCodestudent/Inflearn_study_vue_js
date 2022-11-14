// vuex 사용방법
// 1. vuex설치 : npm i vuex@3.6.2
// 2. 아래 코드 작성
import Vue from 'vue'
import Vuex from 'vuex'
// 모둘화
import todoApp from './modules/todoApp'
// 하나씩 모듈화
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 모둘화
  modules: {
    todoApp
  }
  // 하나씩 모듈화
  // state: {
  //   todoItems: Storage.fetch();
  // },
  // getters: getters,
  // mutations: mutations
});