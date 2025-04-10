import { Equal, Expect } from '../../src/commonness';
import { Sort } from '../../src/array';

type cases = [
  // 기본 케이스
  Expect<Equal<Sort<[]>, []>>,
  Expect<Equal<Sort<[1]>, [1]>>,
  Expect<Equal<Sort<[2, 1]>, [1, 2]>>,
  Expect<Equal<Sort<[0, 0, 0]>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1, 2]>, [1, 2, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0]>, [0, 0, 0, 0, 1, 2, 3]>>,
  Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]>, [2, 4, 5, 6, 6, 6, 7, 8, 9]>>,
  Expect<Equal<Sort<[1, 1, 2, 1, 1, 1, 1, 1, 1]>, [1, 1, 1, 1, 1, 1, 1, 1, 2]>>,

  // 내림차순 정렬 케이스
  Expect<Equal<Sort<[], true>, []>>,
  Expect<Equal<Sort<[1], true>, [1]>>,
  Expect<Equal<Sort<[2, 1], true>, [2, 1]>>,
  Expect<Equal<Sort<[0, 0, 0], true>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1, 2], true>, [3, 2, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0], true>, [3, 2, 1, 0, 0, 0, 0]>>,
  Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9], true>, [9, 8, 7, 6, 6, 6, 5, 4, 2]>>,

  // 엣지 케이스
  Expect<Equal<Sort<[-1, -2, -3]>, [-3, -2, -1]>>,
  Expect<Equal<Sort<[-1, -2, -3], true>, [-1, -2, -3]>>,
  Expect<Equal<Sort<[999, 0, -999]>, [-999, 0, 999]>>,
  Expect<Equal<Sort<[999, 0, -999], true>, [999, 0, -999]>>,
  Expect<Equal<Sort<[0]>, [0]>>,
  Expect<Equal<Sort<[0], true>, [0]>>,

  // 성능 테스트
  Expect<Equal<Sort<[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]>, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>>,
  Expect<Equal<Sort<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>>,
  Expect<Equal<Sort<[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], true>, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]>>,
  Expect<Equal<Sort<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], true>, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]>>,
  Expect<
    Equal<
      Sort<[5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]>,
      [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]
    >
  >,
  Expect<
    Equal<
      Sort<[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], true>,
      [5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1]
    >
  >,
];
