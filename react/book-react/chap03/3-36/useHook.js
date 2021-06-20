// 코드 3-36 의사코드로 표현한 리액트의 내부 코드
import React from 'react';

let hooks = null;

export function useHook() {
  // ...
  hooks.push(hookData);
}

function process_a_component_rendering(component) {
  hooks = [];
  component();
  let hooksForThisComponent = hooks;
  hooks = null;
  // ...
}
