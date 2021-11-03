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
      productList: [
        {
          product_name: '기계식키보드',
          price: 25000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '무선마우스',
          price: 12000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '아이패드',
          price: 725000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '태블릿거치대',
          price: 32000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '무선충전기',
          price: 42000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
      ]
    };
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
