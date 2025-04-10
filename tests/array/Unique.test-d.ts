import { Equal, Expect } from '../../src/commonness';
import { Unique } from '../../src/array';

// 기본 기능 테스트
type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
  Expect<Equal<Unique<[]>, []>>,
  Expect<Equal<Unique<[null, null, undefined, undefined]>, [null, undefined]>>,
  Expect<Equal<Unique<[symbol, symbol, bigint, bigint]>, [symbol, bigint]>>,
  Expect<Equal<Unique<[1, 1, 1, 1, 1]>, [1]>>,
  Expect<Equal<Unique<[object, object, {}]>, [object, {}]>>,
  Expect<Equal<Unique<readonly [1, 1, 2, 2, 3, 3]>, readonly [1, 2, 3]>>,
  Expect<Equal<Unique<readonly [1, 'a', 2, 'b', 2, 'a']>, readonly [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<readonly [string, number, string, number]>, readonly [string, number]>>,
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

type LargeArrayResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 성능 테스트 케이스
type PerformanceTests = [
  // 큰 배열 테스트
  Expect<Equal<Unique<LargeArray>, LargeArrayResult>>,

  // 복잡한 타입이 포함된 배열 테스트
  Expect<
    Equal<
      Unique<[{ a: 1 }, { a: 1 }, { b: 2 }, string, string, number, number]>,
      [{ a: 1 }, { b: 2 }, string, number]
    >
  >,

  // 중첩 배열 테스트
  Expect<Equal<Unique<[[1, 2], [1, 2], [3, 4], [3, 4]]>, [[1, 2], [3, 4]]>>,
];

// 엣지 케이스 테스트
type EdgeCaseTests = [
  // 빈 배열
  Expect<Equal<Unique<[]>, []>>,

  // 모든 요소가 동일한 배열
  Expect<Equal<Unique<[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>, [1]>>,

  // 모든 요소가 다른 배열
  Expect<Equal<Unique<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>>,
];
