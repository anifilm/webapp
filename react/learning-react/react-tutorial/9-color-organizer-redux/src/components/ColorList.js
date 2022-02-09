import PropTypes from 'prop-types';
import Color from './Color';
import { rateColor, removeColor } from '../actions';
import { sortFunction } from '../lib/array-helpers';

import '../../stylesheets/ColorList.scss';

const ColorList = ({ store }) => (
  <div className="color-list">
    {colors.length === 0 ? (
      <p>색이 없습니다. (색을 추가해주세요.)</p>
    ) : (
      colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRate={(rating) => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
        />
      ))
    )}
  </div>
);

ColorList.propTypes = {
  store: PropTypes.object,
};

export default ColorList;
