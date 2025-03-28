import { Equal, Expect } from '../../src/commonness';
import { Zip } from '../../src/array/Zip';

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
  // 엣지 케이스 추가
  Expect<Equal<Zip<[1], []>, []>>,
  Expect<Equal<Zip<readonly [1, 2], readonly [3, 4]>, [[1, 3], [2, 4]]>>,
  Expect<Equal<Zip<[null, undefined], [undefined, null]>, [[null, undefined], [undefined, null]]>>,
  Expect<Equal<Zip<[never], [unknown]>, [[never, unknown]]>>,
  Expect<Equal<Zip<[any], [string]>, [[any, string]]>>,
];
