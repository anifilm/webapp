import PropTypes from 'prop-types';
import { sortColors } from '../actions';

import '../../stylesheets/Menu.scss';

const options = {
  date: 'SORTED_BY_DATE',
  title: 'SORTED_BY_TITLE',
  rating: 'SORTED_BY_RATING',
};

const SortMenu = ({ sort='SORTED_BY_DATE', onSelect=(f) => f }) => {
  return (
    <nav className="menu">
      <h1>Sort Colors</h1>
      {Object.keys(options).map((item, index) => (
        <a
          key={index}
          href="#"
          className={sort === options[item] ? 'selected' : null}
          onClick={(e) => {
            e.preventDefault();
            onSelect(options[item]);
          }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

SortMenu.propTypes = {
  sort: PropTypes.string,
  onSelect: PropTypes.func,
};
export default SortMenu;
