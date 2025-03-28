import { Equal, Expect } from '../../src/commonness';
import { Filter } from '../../src/array/Filter';
import { Falsy } from '../../src/primitive';

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
  Expect<Equal<Filter<['1', 2, null, undefined], Falsy>, [null, undefined]>>,
  Expect<Equal<Filter<[never, never, never], never>, [never, never, never]>>,
  Expect<Equal<Filter<['1', 2, null, undefined], number>, [2]>>,
  // 엣지 케이스
  Expect<Equal<Filter<[], any>, []>>,
  Expect<Equal<Filter<[1, 'a', true], boolean>, [true]>>,
  Expect<Equal<Filter<[1, 2, 3], never>, []>>,
  Expect<Equal<Filter<[string | number, 1, 2], string>, []>>,
  Expect<Equal<Filter<[any, 1, 2], 1>, [1]>>,
  Expect<Equal<Filter<[unknown, 1, 2], unknown>, [unknown, 1, 2]>>,
  // readonly 엣지 케이스
  Expect<Equal<Filter<readonly [1, 2, 3], 2>, readonly [2]>>,
  Expect<Equal<Filter<readonly [1, 'a', true], string>, readonly ['a']>>,
  Expect<Equal<Filter<readonly [0, 1, false, 2, ''], Falsy>, readonly [0, false, '']>>,
];
