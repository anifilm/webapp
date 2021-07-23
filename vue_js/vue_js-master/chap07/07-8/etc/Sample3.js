// 상품 목록을 스테이트로 저장하는 모듈
export default {
  state: {
    // 상품 목록
    products: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Orange' },
      { id: 3, name: 'Banana' }
    ]
  },
  getters: {
    // 게터의 3번째 인자는 루트 스테이트
    currentProduect(state, getters, rootState) {
      // 라우팅 데이터로부터 ID를 받음
      const productId = Number(rootState.route.params.id);

      // 상품 ID와 일치하는 상품을 반환
      return state.products.find((product) => {
        return product.id === productId;
      });
    }
  }
};
