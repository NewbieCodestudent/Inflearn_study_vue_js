<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem : ''
    }
  },
  methods: {
    addTodo : function() {
      if (this.newTofoItem !== '') {
        // $emit : 상위 컴포넌트로 이벤트를 보내는 기능
        // addTodoItem이라는 이름으로 this.newTodoItem를 보낸다
        this.$emit('addTodoItem',this.newTodoItem)
        this.clearInput();
      }
    },
    clearInput: function() {
      // 값 초기화
      this.newTofoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>