import { Expect, Equal } from '../../src/commonness';
import { Reverse } from '../../src/array';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
  // 엣지 케이스 추가
  Expect<Equal<Reverse<[1]>, [1]>>,
  Expect<Equal<Reverse<readonly [1, 2, 3]>, readonly [3, 2, 1]>>,
  Expect<Equal<Reverse<readonly []>, readonly []>>,
  Expect<Equal<Reverse<readonly [1]>, readonly [1]>>,
  // 추가 엣지 케이스
  Expect<Equal<Reverse<[boolean, number, string]>, [string, number, boolean]>>,
  Expect<Equal<Reverse<[any]>, [any]>>,
  Expect<Equal<Reverse<readonly [1, 2, 3, 4, 5]>, readonly [5, 4, 3, 2, 1]>>,
  Expect<Equal<Reverse<[][]>, [][]>>,
  Expect<Equal<Reverse<[[1, 2], [3, 4]]>, [[3, 4], [1, 2]]>>,
  // 더 많은 엣지 케이스
  Expect<Equal<Reverse<[never]>, [never]>>,
  Expect<Equal<Reverse<[unknown, any, never]>, [never, any, unknown]>>,
  Expect<Equal<Reverse<readonly [string, ...number[]]>, readonly [...number[], string]>>,
  Expect<Equal<Reverse<readonly [[1, 2, 3], [4, 5, 6]]>, readonly [[4, 5, 6], [1, 2, 3]]>>,
  Expect<Equal<Reverse<[{ a: 1 }, { b: 2 }]>, [{ b: 2 }, { a: 1 }]>>,
  Expect<Equal<Reverse<[() => void, () => string]>, [() => string, () => void]>>,
];

// 타입 에러 테스트
type errors = [
  // @ts-expect-error: type error
  Reverse<'string'>,
  // @ts-expect-error: type error
  Reverse<{ key: 'value' }>,
  // @ts-expect-error: type error
  Reverse<number>,
  // @ts-expect-error: type error
  Reverse<null>,
  // @ts-expect-error: type error
  Reverse<undefined>,
];

// 성능 테스트
type LongTuple = [
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

type ReversedLongTuple = [
  30,
  29,
  28,
  27,
  26,
  25,
  24,
  23,
  22,
  21,
  20,
  19,
  18,
  17,
  16,
  15,
  14,
  13,
  12,
  11,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
];

// 긴 튜플 성능 테스트
type performanceTests = [
  Expect<Equal<Reverse<LongTuple>, ReversedLongTuple>>,
  Expect<Equal<Reverse<LongTuple>, ReversedLongTuple>>,
];

// 중첩된 튜플 성능 테스트
type NestedTuple = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
type ReversedNestedTuple = [[9, 10], [7, 8], [5, 6], [3, 4], [1, 2]];

type nestedPerformanceTests = [Expect<Equal<Reverse<NestedTuple>, ReversedNestedTuple>>];
