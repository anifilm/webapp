import PropTypes from 'prop-types';
import StarRating from './StarRating';
import TimeAgo from './TimeAgo';
import FaTrash from 'react-icons/lib/fa/trash-o';

import '../../stylesheets/Color.scss';

const Color = ({ title, color, rating, timestamp, onRemove, onRate }) => (
  <section className="color" style={this.style}>
    <h1>{title}</h1>
    <button onClick={onRemove}>
      <FaTrash />
    </button>
    <div className="color" style={{ backgroundColor: color }}></div>
    <TimeAgo timestamp={timestamp} />
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

Color.defaultProps = {
  rating: 0,
  onRemove: (f) => f,
  onRate: (f) => f,
};

export default Color;
