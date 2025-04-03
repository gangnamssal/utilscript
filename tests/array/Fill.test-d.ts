import { Equal, Expect } from '../../src/commonness';
import { Fill } from '../../src/array';

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
  // 추가 엣지 케이스
  Expect<Equal<Fill<[1, 2, 3, 4, 5], 0, 2, 4>, [1, 2, 0, 0, 5]>>,
  Expect<Equal<Fill<[string, number, boolean], null>, [null, null, null]>>,
  Expect<Equal<Fill<[1, 2, 3], 'a', 1, 2>, [1, 'a', 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, -1, 1>, [1, 2, 3]>>,
  Expect<Equal<Fill<readonly [1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[any], string>, [string]>>,
];
