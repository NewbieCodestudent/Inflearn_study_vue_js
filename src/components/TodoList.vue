<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  methods: {
    ...mapMutations({
      // 인자를 따로 선언하지 않는 대신 넘기는 인자가 여러개일 경우
      // 위에 template에서 인자를 {}로 감싸준다.
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),
    /*
    removeTodo(todoItem, index) {
      // this.$emit('removeItem',todoItem,index);
      this.$store.commit('removeOneItem', {todoItem:todoItem, index:index});
    },
    toggleComplete(todoItem, index) {
      // this.$emit('toggleItem',todoItem, index);
      // 변수명과 변수값이 같으면 하나의 단어로 작성가능
      this.$store.commit('toggleOneItem',{todoItem, index});
    }
    */
  },
  computed: {
    // todoItems() {
    //   console.log(this.$store.getters.storedTodoItems);
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>