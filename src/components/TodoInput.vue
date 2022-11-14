<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <AlertModal v-if="showModal" @close="showModal = false">
      <!-- slot을 통해서 불러오는 컴포넌트의 내용을 수정할 수 있다. -->
      <h3 slot="header">
        경고
        <!-- @ = v-on 과 같은 의미이다. -->
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <h3 slot="body">
        내용을 입력해주세요.
      </h3>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data() {
    return {
      newTodoItem : "",
      showModal : false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // $emit : 상위 컴포넌트로 이벤트를 보내는 기능
        // addTodoItem이라는 이름으로 this.newTodoItem를 보낸다
        // trim 앞뒤 공백을 없어주는 기능
        // this.$emit('addTodoItem',this.newTodoItem)
        console.log(this.newTodoItem)
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
      } else {
        // showModal를 v-if로 false값을 주어 출력을 안하였기 때문에 true로 바꾸면서 출력
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      // 값 초기화
      this.newTodoItem = '';
    }
  },
  components: {
    AlertModal
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
.closeModalBtn {
  color:#42b983
}
</style>