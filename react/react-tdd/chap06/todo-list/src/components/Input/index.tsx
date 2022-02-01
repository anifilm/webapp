import React from 'react';
import Styled from 'styled-components';

const InputBox = Styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
  const onChangeHandler = (event: { target: { value: string } }) => {
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };
  return (
    <InputBox
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
