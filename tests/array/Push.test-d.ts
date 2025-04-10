import { Equal, Expect } from '../../src/commonness';
import { Push } from '../../src/array/Push';

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
  // 엣지 케이스 추가
  Expect<Equal<Push<readonly [1], 2>, readonly [1, 2]>>,
  Expect<Equal<Push<[], undefined>, [undefined]>>,
  Expect<Equal<Push<[], null>, [null]>>,
  Expect<Equal<Push<[any], never>, [any, never]>>,
  Expect<Equal<Push<readonly [], 'a'>, readonly ['a']>>,
  // 추가 엣지 케이스
  Expect<Equal<Push<readonly [1, 2, 3], 4>, readonly [1, 2, 3, 4]>>,
  Expect<Equal<Push<[1], [2, 3]>, [1, [2, 3]]>>,
  Expect<Equal<Push<[], []>, [[]]>>,
  // @ts-expect-error: type error
  Push<number, 1>,
  // @ts-expect-error: type error
  Push<string, 'a'>,
  // @ts-expect-error: type error
  Push<{ length: 10 }, 1>,
  // @ts-expect-error: type error
  Push<null, 1>,
  // @ts-expect-error: type error
  Push<undefined, 1>,
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

// 큰 배열에 요소 추가 성능 테스트
type PushToLargeArray = Push<LargeArray, 51>;

// 읽기 전용 큰 배열에 요소 추가 성능 테스트
type ReadonlyLargeArray = readonly [
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
];
type PushToReadonlyLargeArray = Push<ReadonlyLargeArray, 31>;

// 중첩된 배열 성능 테스트
type NestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [13, 14],
  [15, 16],
  [17, 18],
  [19, 20],
];
type PushToNestedArray = Push<NestedArray, [21, 22]>;

// 다양한 타입이 섞인 배열 성능 테스트
type MixedArray = [
  1,
  'string',
  true,
  { a: 1 },
  [1, 2],
  2,
  'string2',
  false,
  { b: 2 },
  [3, 4],
  3,
  'string3',
  true,
  { c: 3 },
  [5, 6],
];
type PushToMixedArray = Push<MixedArray, null>;
