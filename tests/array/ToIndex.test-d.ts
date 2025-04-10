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

type LargeArrayResult = ToIndex<LargeArray>;
// 매우 큰 배열에 대한 테스트
type VeryLargeArray = [...LargeArray, ...LargeArray];
type VeryLargeArrayResult = ToIndex<VeryLargeArray>;

// 중첩 배열에 대한 성능 테스트
type NestedArray = [[1, 2], [3, 4], [5, 6]];
type NestedArrayResult = ToIndex<NestedArray>;
