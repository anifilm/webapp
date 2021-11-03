<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList" v-bind:key="index">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.productList = await this.$api(`${process.env.VUE_APP_MOCK_SERVER_01}/list`, 'get');
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
