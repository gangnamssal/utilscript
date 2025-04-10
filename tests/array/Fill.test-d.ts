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
  // 성능 테스트 케이스
  Expect<Equal<Fill<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0>, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 3, 7>, [1, 2, 3, 0, 0, 0, 0, 8, 9, 10]>>,
  Expect<
    Equal<
      Fill<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'x', 5, 10>,
      [1, 2, 3, 4, 5, 'x', 'x', 'x', 'x', 'x', 11, 12, 13, 14, 15]
    >
  >,
  Expect<
    Equal<
      Fill<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], null, 0, 20>,
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]
    >
  >,
];
