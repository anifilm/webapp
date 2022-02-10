import PropTypes from 'prop-types';
import Color from './Color';

import '../../stylesheets/ColorList.scss';

const ColorList = ({ colors=[] }) => {
  return (
    <div className="color-list">
      {colors.length === 0 ? (
        <p>색이 없습니다. (색을 추가해주세요.)</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            {...color}
          />
        ))
      )}
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
}

export default ColorList;
