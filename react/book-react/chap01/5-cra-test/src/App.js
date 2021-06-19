import './App.css';
import bigImage from './big.png';
import smallImage from './small.png';
import TodoList from './TodoList';
import './test.css';

function App() {
  return (
    <div className="App">
      <img src={bigImage} alt="big" />
      <img src={smallImage} alt="small" />
      <TodoList />
    </div>
  );
}

console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);

export default App;
