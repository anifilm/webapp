import Link from 'next/link';

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <p>
        <Link href="/tomato">
          <a>Move to '/tomato'</a>
        </Link>
      </p>
      <p>
        <Link href="/vegetable/potato">
          <a>Move to '/vegetable/tomato'</a>
        </Link>
      </p>
    </div>
  );
};

export default App;
