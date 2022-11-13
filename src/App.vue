<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    // 함수 축약
    // 기본형태 : fun : function() {}
    // 1. 화살표 함수 : fun : () => {}
    // 2. 향상된 객체 리터럴(Enhanced Object Literals) : 객체의 속성을 메서드로 사용할 때 function 예약어를 생략하고 생서 가능
    //     fun() {}
    addOneItem(todoItem) {
      let obj = {completed:false, item:todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // 인스턴스가 실행될 때 실행되는 기능
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-sever') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // console.log(localStorage.key(i));
        }
      }
    }
  },
  components: {
    // 객체의 속성명과 값 명이 동일할 때 축약 가능
    // 'TodoHeader' : TodoHeader,
    // 'TodoFooter' : TodoFooter,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>