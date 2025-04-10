import { Equal, Expect } from '../../src/commonness';
import { Without } from '../../src/array';
import { Falsy } from '../../src/primitive';

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
  Expect<Equal<Without<['a', 'b', 'c'], ['a', 'b']>, ['c']>>,
  Expect<Equal<Without<['abc', 'b', 'c'], ['a', 'b']>, ['abc', 'c']>>,
  Expect<Equal<Without<[1, never, null, undefined], Falsy>, [1]>>,
  Expect<Equal<Without<[1, 2, 3, never], never>, [1, 2, 3]>>,
  // 엣지 케이스 추가
  Expect<Equal<Without<[], 1>, []>>,
  Expect<Equal<Without<[1], 1>, []>>,
  Expect<Equal<Without<readonly [1, 2, 3], 1>, readonly [2, 3]>>,
  Expect<Equal<Without<[1, 2, 3], []>, [1, 2, 3]>>,
  Expect<Equal<Without<[1, 2, 3], readonly [1]>, [2, 3]>>,
];

// 성능 테스트 - 큰 배열에서의 동작 확인
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
];

type LargeArrayWithout = Without<LargeArray, [1, 3, 5, 7, 9]>;
type ExpectedResult = [
  2,
  4,
  6,
  8,
  10,
  2,
  4,
  6,
  8,
  10,
  2,
  4,
  6,
  8,
  10,
  2,
  4,
  6,
  8,
  10,
  2,
  4,
  6,
  8,
  10,
];

type PerformanceTest = [
  Expect<Equal<LargeArrayWithout, ExpectedResult>>,
  // 중첩된 배열 제거 테스트
  Expect<Equal<Without<[1, [2, 3], 4, [5, 6]], [2, 3]>, [1, [2, 3], 4, [5, 6]]>>,
  // 다양한 타입이 섞인 큰 배열 테스트
  Expect<
    Equal<
      Without<[1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e'], [1, 3, 5, 'a', 'c', 'e']>,
      [2, 'b', 4, 'd']
    >
  >,
];
