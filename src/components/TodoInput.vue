<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTofoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTofoItem : ''
    }
  },
  methods: {
    addTodo : function() {
      if (this.newTofoItem !== '') {
        // 저장하는 로직
        // 배열화 작업
        let obj = {completed:false, item:this.newTofoItem};
        // JSON.stringify로 하는 이유 : obj로 넣으면 object로 안의 내요이 안보이지만 JSON화 하면 배열의 내용을 string으로 풀어서 넣어준다.
        localStorage.setItem(this.newTofoItem, JSON.stringify(obj));
        console.log(this.newTofoItem);
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