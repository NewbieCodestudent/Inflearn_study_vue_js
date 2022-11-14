// vuex 사용방법
// 1. vuex설치 : npm i vuex@3.6.2
// 2. 아래 코드 작성
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-sever') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // console.log(localStorage.key(i));
        }
      }
    }
    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  // mutations : state 값을 변경할 수 있는 메서드
  // 호출할 때는 사용할 components에서 commit()으로 호출
  // commit('호출할 메서드','넘길값')
  // '넘길값' : 1개 일때 commit('function', 20) => 값을 입력
  //           여러개 일때 commit('function', {str: 1, num: 20}) => 값을 키,배류로 입력
  mutations: {
    addOneItem(state, todoItem) {
      let obj = {completed:false, item:todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index,1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  },
  // actions : 비동기 처리 로직을 언언하는 메서드, 비동기 로직을 담당하는 mutations
  // 데이터 요청, promis, es6 async과 같은 비동기 처리는 모두 actions에 선언
  // actions: {
  //   test(context) {
  //     context.commit('mutations의 매서드 명');
  //   }
  // }
  // vue파일에서 this.$store.dispatch('test')로 호출 가능
  // [ 예제 ]
  // mutations: {
  //   setData(state, fetchedData) {
  //     state.product = fetchedData;
  //   }
  // },
  // actions: {
  //   fetchProductData(context) {
  //     return axios.get('https://domain.com/products/1').then(response => comtext.commit('setData', response));
  //   }
  // }
  // vue 파일
  // methods: {
  //   getProduct() {
  //     this.$store.dispatch('fetchProductData')
  //   }
  // }
});

// vuex는 전역에서 사용할 수 있는 component라고 생각하면 된다.