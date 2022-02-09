import PropTypes from 'prop-types';
import Color from './Color';
import { rateColor, removeColor } from '../actions';
import { sortFunction } from '../lib/array-helpers';

import '../../stylesheets/ColorList.scss';

const ColorList = ({ store }) => {
  const { colors, sort } = store.getState();
  const sortedColors = [...colors].sort(sortFunction(sort));
  // TODO: 내용 확인 및 timestamp 타입 체크
  console.log(colors);

  return (
    <div className="color-list">
      {colors.length === 0 ? (
        <p>색이 없습니다. (색을 추가해주세요.)</p>
      ) : (
        sortedColors.map((color) => (
          <Color
            key={color.id}
            {...color}
            onRate={(rating) => store.dispatch(rateColor(color.id, rating))}
            onRemove={() => store.dispatch(removeColor(color.id))}
          />
        ))
      )}
    </div>
  );
};

ColorList.propTypes = {
  store: PropTypes.object,
};

export default ColorList;
