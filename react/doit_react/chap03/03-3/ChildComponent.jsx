import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;
    return (
      <div>
        <span>불리언 값: {boolValue}</span><br/>
        <span>숫자 값: {numValue}</span><br/>
        <span>배열 값: {arrayValue}</span><br/>
        <span>객체 값: {String(objValue)}</span><br/>
        <span>노드 값: {nodeValue}</span><br/>
        <span>함수 값: {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
}

export default ChildComponent;
