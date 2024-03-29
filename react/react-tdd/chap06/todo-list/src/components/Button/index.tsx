import React from 'react';
import Styled from 'styled-components';

interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

const Container = Styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
const Label = Styled.div`
  color: #ffffff;
  font-size: 16px;
`;

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

export const Button = ({
  label,
  backgroundColor = '#304ffe',
  hoverColor = '#1e40ff',
  onClick,
}: Props) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      <Label>{label}</Label>
    </Container>
  );
};
