import { mapState } from 'vuex';

export default {
  computed: {
    // 일반적인 계산 프로퍼티 정의
    double() {
      return this.count * 2;
    },
    // 객체 스프레드 연산자를 사용해 일반적인 계산 프로퍼티와 mapState의 반환값을 결합
    ...mapState(['count'])
  }
};
