<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">상품 정보</router-link>
    </nav>
    <!-- 여기에 경로에 일치하는 컴포넌트가 들어감 -->
    <router-view />
  </div>
</template>
