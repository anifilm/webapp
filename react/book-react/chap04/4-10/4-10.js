// 코드 4-10 조금 복잡한 조건부 렌더링 예
function GreetingA({ isLogin, name }) {
  if (isLogin) {
    return (
      <p className="greeting" onClick={showMenu}>
        {`${name}님 안녕하세요.`}
      </p>
    );
  } else {
    return (
      <p className="noAuth" onClick={goToLoginPage}>
        권한이 없습니다.
      </p>
    );
  }
}

function GreetingB({ isLogin, name }) {
  return (
    <p
      className={isLogin ? 'greeting' : 'noAuth'}
      onClick={isLogin ? showMenu : goToLoginPage}
    >
      {isLogin ? `${name}님 안녕하세요.` : '권한이 없습니다.'}
    </p>
  );
}
