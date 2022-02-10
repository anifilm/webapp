import PropTypes from 'prop-types';
import { sortColors } from '../actions';

import '../../stylesheets/Menu.scss'

const options = {
  date: 'SORTED_BY_DATE',
  title: 'SORTED_BY_TITLE',
  rating: 'SORTED_BY_RATING',
};

const SortMenu = (props, { store }) => {
  return (
    <nav className="menu">
      <h1>Sort Colors</h1>
      {Object.keys(options).map((item, index) => (
        <a
          key={index}
          href="#"
          className={
            store.getState().sort === options[item] ? 'selected' : null
          }
          onClick={(e) => {
            e.preventDefault();
            store.dispatch(sortColors(options[item]));
          }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

SortMenu.contextTypes = {
  store: PropTypes.object,
};

export default SortMenu;
