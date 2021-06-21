import React, { Component } from 'react';
import LifecycleExample from './LifecycleExample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }
  render() {
    return (
      <div>
        {/*<LifecycleExample />*/}
        {this.state.hasDestroyed? null : <LifecycleExample /> }
      </div>
    );
  }
}

export default App;
