<!-- 헬퍼 함수를 이용한 코드정리 -->
<template>
  <div id="root">
    <p>{{originalPrice}}</p>
    <p>{{doublePric}}</p>
    <p>{{triplePrice}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['originalPrice','doublePric','triplePrice']),
    // originalPrice() {
    //   return this.$store.getters.originalPrice
    // },
    // doublePric() {
    //   return this.$store.getters.doublePric
    // },
    // triplePrice() {
    //   return this.$store.getters.triplePrice
    // }
  }
}
</script>

<style>

</style>