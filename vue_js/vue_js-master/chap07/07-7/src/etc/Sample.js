import { mapState } from 'vuex';

export default {
  // $store.state.count를 this.value와 연결
  computed: mapState({ value: 'count' })
};
