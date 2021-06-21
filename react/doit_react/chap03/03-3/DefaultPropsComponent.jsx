import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
  render() {
    let message1 = '';
    if (this.props.boolValue === false) {
      message1 = 'boolValue 기본값이 false 입니다.';
    }
    let message2 = '';
    if (this.props.boolValueWithoutDefalut === false) {
      message2 = 'boolValueWithoutDefault 기본값이 false 입니다.';
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValiuWithoutDefalut: PropTypes.bool,
};

// 기본값을 선언하는 예제
DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
