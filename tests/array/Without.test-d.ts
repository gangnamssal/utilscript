import { Equal, Expect } from '../../src/commonness';
import { Without } from '../../src/array';
import { Falsy } from '../../src/primitive';

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
  Expect<Equal<Without<['a', 'b', 'c'], ['a', 'b']>, ['c']>>,
  Expect<Equal<Without<['abc', 'b', 'c'], ['a', 'b']>, ['abc', 'c']>>,
  Expect<Equal<Without<[1, never, null, undefined], Falsy>, [1]>>,
  Expect<Equal<Without<[1, 2, 3, never], never>, [1, 2, 3]>>,
];
