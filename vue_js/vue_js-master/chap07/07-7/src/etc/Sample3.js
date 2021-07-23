// mapState의 첫번째 인자로 네임스페이스를 지정한 예
import { mapState } from 'vuex';

export default {
  // $store.state.counter.count를 this.count와 연결
  computed: mapState('counter', ['count'])
};

// createNamespacedHelper로 counter 네임스페이스에 mapState를 생성하는 예
import { createNamespacedHelpers } from 'vuex';

// counter를 대상으로 하는 헬퍼 함수 생성
const counterHelpers = createNamespacedHelpers('counter');

export default {
  // $store.state.counter.count를 this.count와 연결
  computed: counterHelpers.mapState(['count'])
};
