import React from 'react';
import Potato from './Potato';

function Movie(props) {
  console.log(props);
  const { fav } = props;
  return (
    <div>
      <h3>I like {fav}.</h3>
    </div>
  );
}

function Food({ fav }) {
  return (
    <div>
      <h3>I like {fav}.</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Potato />
      <Movie fav="The Shawshank Redemption" somthing={true} papa={['hello', 1, 2, 3, 4, true]} />
      <Food fav="kimchi" />
      <Food fav="ramen" />
    </div>
  );
}

export default App;
