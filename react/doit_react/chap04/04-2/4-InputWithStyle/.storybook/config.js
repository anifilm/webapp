import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadStories() {
  // 스토리 파일을 이곳에 추가할 수 있습니다.
  //require('../src/stories/InputStory');
  //require('../src/stories/NewCounterStory');

  // 스토리가 자동으로 스토리북에 추가되도록 설정
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
