// ES6의 라이브로리 의존성 관리 방법 알아보기

import MyModule from './MyModule';
import { ModuleName } from './MyModule';
import { ModuleName as RenamedModuleName } from './MyModule';

function Func() {
  MyModule();
}

export const CONST_VALUE = 0;
export class MyClass {}
export default new Func();
