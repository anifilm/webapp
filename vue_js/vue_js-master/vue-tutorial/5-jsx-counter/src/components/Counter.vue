<script>
export default {
  name: 'counter',
  data: function () {
    return {
      counter: 0
    }
  },
  // eslint-disable-next-line no-unused-vars
  render: function (h) {
    return (
      <div>
        <h2>렌더링 함수 - JSX 사용</h2>
        <button on-click={() => this.counter += 1}>클릭 카운트 증가</button>
        <p>클릭 횟수: <b>{this.counter}번</b></p>
      </div>
    );
  }
}
</script>
