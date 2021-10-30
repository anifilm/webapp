// 코드 4-15 복잡한 조건을 && 연산자로 구현한 예
function Greeting({ isEvent, isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isEvent && (
        <div>
          <p>오늘 이벤트를 놓치지 마세요.</p>
          <button onClick={onClickEvent}>이벤트 참여하기</button>
        </div>
      )}
      {!isEvent && isLogin && cash < 10000 && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
        </div>
      )}
    </div>
  );
}
