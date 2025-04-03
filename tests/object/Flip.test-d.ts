import { Expect, Equal, NotEqual } from '../../src/commonness';
import { Flip } from '../../src/object';

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,

  // 엣지 케이스
  Expect<Equal<{}, Flip<{}>>>,
  Expect<Equal<{ undefined: 'key' }, Flip<{ key: undefined }>>>,
  Expect<Equal<{ null: 'key' }, Flip<{ key: null }>>>,
  Expect<Equal<{ '': 'empty' }, Flip<{ empty: '' }>>>,
  Expect<Equal<{ '10': 'age' }, Flip<{ age: 10 }>>>,
  Expect<Equal<{ true: 'isActive' }, Flip<{ isActive: true }>>>,
  Expect<Equal<{ 'a,b,c': 'arr' }, Flip<{ arr: 'a,b,c' }>>>,
  Expect<Equal<{ a: 'x'; b: 'x' }, Flip<{ x: 'a' | 'b' }>>>,
];
