function App() {
  const name = '리액트';
  /*
  return (
    <div>
      {name === '리액트' ? <h1>리액트 입니다.</h1> : null}
    </div>
  ); */
  return (
    <div>
      {name === '리액트' && <h1>리액트 입니다.</h1>}
    </div>
  );
}

export default App;
