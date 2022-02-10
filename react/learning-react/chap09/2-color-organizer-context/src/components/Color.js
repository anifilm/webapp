import PropTypes from 'prop-types';
import StarRating from './StarRating';
import TimeAgo from './TimeAgo';
import FaTrash from 'react-icons/lib/fa/trash-o';
import { rateColor, removeColor } from '../actions'

import '../../stylesheets/Color.scss';

const Color = ({ id, title, color, rating, timestamp }, { store }) => (
  <section className="color">
    <h1>{title}</h1>
    <button onClick={() => store.dispatch(removeColor(id))}>
      <FaTrash />
    </button>
    <div className="color" style={{ backgroundColor: color }}></div>
    <TimeAgo timestamp={timestamp} />
    <div>
      <StarRating starsSelected={rating} onRate={(rating) => store.dispatch(rateColor(id, rating))} />
    </div>
  </section>
);

Color.contextTypes = {
  store: PropTypes.object,
};

Color.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  timestamp: PropTypes.string,
};

Color.defaultProps = {
  rating: 0,
};

export default Color;
