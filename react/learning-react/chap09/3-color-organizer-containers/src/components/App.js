import { Component } from 'react';
import PropTypes from 'prop-types'
import { Menu, NewColor, Colors } from './containers';

import '../../stylesheets/APP.scss';

// TODO: App Hooks로 변경할 것
class App extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="app">
        <Menu />
        <NewColor />
        <Colors />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
