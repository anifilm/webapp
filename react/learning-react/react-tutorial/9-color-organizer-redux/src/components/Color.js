import PropTypes from 'prop-types';
import StarRating from './StarRating';
import TimeAgo from './TimeAgo';
import FaTrash from 'react-icons/lib/fa/trash-o';

import '../../stylesheets/Color.scss';

const Color = ({ title, color, rating, timestamp, onRemove, onRate }) => (
  <section className="color">
    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className="color" style={{ backgroundColor: color }}></div>
    <div>
      <StarRating starsSelected={rating} onRate={onRate} />
    </div>
  </section>
);

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func,
};

export default Color;
