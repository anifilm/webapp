// 라우터 인스턴스 임포트
import router from '../router';

// 상품 목록을 스테이트로 저장하는 모듈
export default {
  state: {
    // 상품 목록
    products: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Orange' },
      { id: 3, name: 'Banana' }
    ],
    // 상품 검색 키워드
    keyword: '',
    // 상품 검색 결과
    result: []
  },
  actions: {
    search({ state, commit, dispatch }) {
      // 키워드와 일치하는 상품을 검색
      const result = state.products.filter(product => {
        return product.name.includes(state.keyword);
      });

      if (result.length === 0) {
        // 검색 결과가 없으면 오류 알림
        dispatch('showError', '키워드와 일치하는 상품이 없습니다.');
      } else {
        // 결과가 있으면 스테이트에 반영
        commit('setSearchResult', result);
        // 페이지 이동
        router.push('/earch');
      }
    }
  },
  mutaions: {
    // 검색 결과를 스테이트에 설정
    setSearchResult(state, result) {
      state.result = result;
    }
  }
};
