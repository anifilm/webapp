<template>
  <div class="product">
    <h1>{{ detail.name }}</h1>
    <nav class="nav">
      <router-link :to="{ name: 'product-home' }">상품 상세</router-link>
      <router-link :to="{ name: 'product-review' }">리뷰</router-link>
    </nav>
    <!-- 여기에 자식이 들어감 -->
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    id: Number
  },
  computed: mapGetters('product', ['detail']),
  watch: {
    id: {
      handler() {
        this.$store.dispatch('product/load', this.id);
      },
      immediate: true
    }
  },
  beforeDestroy() {
    // 부모를 이동할 때 상품 상세 데이터 제거하기
    this.$store.dispatch('product/destroy');
  }
};
</script>
