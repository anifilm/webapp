import PropTypes from 'prop-types';
import { addColor } from '../actions';

import '../../stylesheets/AddColorForm.scss';

const AddColorForm = ({ onNewColor=(f) => f }) => {
  // TODO: useState로 변경할 것
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  };

  return (
    <form className="add-color" onSubmit={submit}>
      <input
        ref={(input) => (_title = input)}
        type="text"
        placeholder="색 이름..."
        required
      />
      <input ref={(input) => (_color = input)} type="color" required />
      <button>추가</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func,
};
export default AddColorForm;
