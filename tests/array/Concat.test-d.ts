import { Equal, Expect } from '../../src/commonness';
import { Concat } from '../../src/array/Concat';

const tuple = [1] as const;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
  // 추가 테스트 케이스
  Expect<Equal<Concat<[1], []>, [1]>>,
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[1, 2, 3], [4, 5]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Concat<[string, number], [boolean, object]>, [string, number, boolean, object]>>,
  Expect<Equal<Concat<[any], [unknown]>, [any, unknown]>>,
  Expect<Equal<Concat<readonly [1], readonly [2]>, [1, 2]>>,
  Expect<Equal<Concat<readonly [1], [2]>, [1, 2]>>,
];

// @ts-expect-error: type error
type error = Concat<null, undefined>;
