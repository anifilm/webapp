import PropTypes from 'prop-types';
import SortMenu from './SortMenu';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

import '../../stylesheets/APP.scss';

const App = ({ store }) => {
  return (
    <div className="app">
      <SortMenu store={store} />
      <AddColorForm store={store} />
      <ColorList store={store} />
    </div>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
