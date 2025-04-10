import { Equal, Expect } from '../../src/commonness';
import { LastIndexOf } from '../../src/array';

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
  // 엣지 케이스
  Expect<Equal<LastIndexOf<[], 1>, -1>>,
  Expect<Equal<LastIndexOf<[undefined], undefined>, 0>>,
  Expect<Equal<LastIndexOf<[null], null>, 0>>,
  Expect<Equal<LastIndexOf<[1, 1, 1], 1>, 2>>,
  Expect<Equal<LastIndexOf<[never], never>, 0>>,
  // readonly 배열 테스트
  Expect<Equal<LastIndexOf<readonly [1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<readonly [2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  // @ts-expect-error: type error
  Expect<Equal<LastIndexOf<number, number>, -1>>,
  // @ts-expect-error: type error
  Expect<Equal<LastIndexOf<{}, number>, -1>>,
];

// 성능 테스트
type LargeArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
];

// 배열 끝에 있는 요소 검색 (최악의 경우)
type TestLastElement = Expect<Equal<LastIndexOf<LargeArray, 50>, 49>>;

// 배열 중간에 있는 요소 검색
type TestMiddleElement = Expect<Equal<LastIndexOf<LargeArray, 25>, 24>>;

// 배열에 없는 요소 검색
type TestNonExistentElement = Expect<Equal<LastIndexOf<LargeArray, 100>, -1>>;

// 중복된 요소가 있는 큰 배열
type ArrayWithDuplicates = [
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
];

// 중복된 요소의 마지막 인덱스 검색
type TestDuplicateElement = Expect<Equal<LastIndexOf<ArrayWithDuplicates, 3>, 47>>;
