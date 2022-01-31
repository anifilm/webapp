import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import Text from '../Text';
import withHoC from '../withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoc = withHoC(Text);

storiesOf('WithHoC', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithHoC>안녕하세요</ButtonWithHoC>
      <TextWithHoc>안녕하세요</TextWithHoc>
    </div>
  ))
  .addWithJSX('large 예제', () => (
    <div>
      <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
      <TextWithHoc large>안녕하세요</TextWithHoc>
    </div>
  ));
