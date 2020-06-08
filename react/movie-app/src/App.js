import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg",
    rating: 3
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "http://cdn.kormedi.com/wp-content/uploads/2020/03/gettyimages-a11229272-580x387.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1024px-Dolsot-bibimbap.jpg",
    rating: 3
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://funshop.akamaized.net//products/0000076768/vs_image800.jpg",
    rating: 4
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg",
    rating: 4
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>rating: {rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
