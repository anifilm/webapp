import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from './index';

describe('<Button />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Button label="Button Test" />);
    const label = screen.getByText('Button Test');
    expect(label).toBeInTheDocument();
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304ffe');
    expect(parent).toHaveStyleRule('background-color', '#1e40ff', {
      modifier: ':hover',
    });
    expect(container).toMatchSnapshot();
  });

  it('changes backgroundColor and hoverColor Props', () => {
    const backgroundColor = '#ff1744';
    const hoverColor = '#f01440';
    render(<Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />);
    const parent = screen.getByText('Button Test').parentElement;
    expect(parent).toHaveStyleRule('background-color', backgroundColor);
    expect(parent).toHaveStyleRule('background-color', hoverColor, {
      modifier: ':hover',
    });
  });

  it('clicks the button', () => {
    const handleClick = jest.fn();
    render(<Button label="Button Test" onClick={handleClick} />);
    const label = screen.getByText('Button Test');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
