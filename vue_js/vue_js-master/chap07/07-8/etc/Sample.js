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
    // 현재 페이지와 연결된 상품을 반환하는 게터
    currentProduct(state) {
      return state.products.find((product) => {
        // 정보를 표시할 상품의 ID가 스토어에 없으므로 대상 상품을 찾을 수 없음
        return product.id === null;
      });
    }
  }
};
