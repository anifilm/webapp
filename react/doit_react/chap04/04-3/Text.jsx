import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends PureComponent {
  render() {
    const {
      children,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
    } = this.props;
    return (
      <span
        {...css(
          styles.default,
          large && styles.large,
          xlarge && styles.xlarge,
          xsmall && styles.xsmall,
          small && styles.small,
          primary && styles.primary,
          secondary && styles.secondary,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  large: {
    fontSize: size.lg,
  },
  xlarge: {
    fontSize: size.xg,
  },
  small: {
    fontSize: size.sm,
  },
  xsmall: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
