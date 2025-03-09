import { ToIndex } from '../../src/array';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<ToIndex<[]>, []>>,
  Expect<Equal<ToIndex<[1, 2, 3]>, [0, 1, 2]>>,
  Expect<Equal<ToIndex<['a', 'b', 'c']>, [0, 1, 2]>>,
  Expect<Equal<ToIndex<[1, 'a', 'b', 'c']>, [0, 1, 2, 3]>>,
  Expect<Equal<ToIndex<[1, 'a', 'b', 'c', 'd']>, [0, 1, 2, 3, 4]>>,
];
