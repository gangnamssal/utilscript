import { ToIndex } from '../../src/array';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<ToIndex<[]>, []>>,
  Expect<Equal<ToIndex<[1, 2, 3]>, [0, 1, 2]>>,
  Expect<Equal<ToIndex<['a', 'b', 'c']>, [0, 1, 2]>>,
  Expect<Equal<ToIndex<[1, 'a', 'b', 'c']>, [0, 1, 2, 3]>>,
  Expect<Equal<ToIndex<[1, 'a', 'b', 'c', 'd']>, [0, 1, 2, 3, 4]>>,
  // 엣지 케이스 추가
  Expect<Equal<ToIndex<readonly [1, 2, 3]>, readonly [0, 1, 2]>>,
  Expect<Equal<ToIndex<[any, unknown, never]>, [0, 1, 2]>>,
  Expect<Equal<ToIndex<[...string[]]>, never[]>>,
  Expect<Equal<ToIndex<readonly string[]>, readonly never[]>>,
];
