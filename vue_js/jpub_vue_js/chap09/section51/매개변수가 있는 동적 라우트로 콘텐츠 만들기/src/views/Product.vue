<template>
  <div class="product" v-if="item" key="product">
    <h1>상품 정보</h1>
    <ul class="product-table">
      <li>상품 이름: {{ item.name }}</li>
      <li>가격: {{ item.price }}원</li>
      <li>상품 설명: {{ item.content }}</li>
    </ul>
  </div>
  <div v-else key="loading">상품 정보를 읽어 들이고 있습니다...</div>
</template>

<script>
import products from '@/api/products.js';
export default {
  props: {
    id: Number
  },
  data() {
    return {
      item: null
    };
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, item => {
          this.item = item;
        });
      },
      immediate: true
    }
  }
};
</script>
