import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      {/* <img src={picture} /> */}
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "http://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg"
  },
  {
    name: "Samgyeopsal",
    image: "http://cdn.kormedi.com/wp-content/uploads/2020/03/gettyimages-a11229272-580x387.jpg"
  },
  {
    name: "Bibimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1024px-Dolsot-bibimbap.jpg"
  },
  {
    name: "Doncasu",
    image: "https://funshop.akamaized.net//products/0000076768/vs_image800.jpg"
  },
  {
    name: "Kimbap",
    image: "http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
