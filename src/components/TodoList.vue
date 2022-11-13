<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  // 인스턴스가 실행될 때 실행되는 기능
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-sever') {
          console.log(localStorage.getItem(localStorage.key(i)));
          console.log(typeof localStorage.getItem(localStorage.key(i)));
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // console.log(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      // 저장소에서 제거
      localStorage.removeItem(todoItem);
      // 화면에서 제거
      this.todoItems.splice(index,1);
    },
    toggleComplete: function(todoItem, index) {
      console.log(todoItem, index);
      // 화면에서 수정
      todoItem.completed = !todoItem.completed;
      // 저장소에서 변환(삭제 후 추가해야함...)
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>