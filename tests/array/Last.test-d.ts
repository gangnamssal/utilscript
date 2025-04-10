import { Equal, Expect } from '../../src/commonness';
import { Last } from '../../src/array';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  // 엣지 케이스 추가
  Expect<Equal<Last<readonly [1, 2, 3]>, 3>>,
  Expect<Equal<Last<[...string[]]>, string>>,
  Expect<Equal<Last<[[...string[]]]>, string[]>>,
  Expect<Equal<Last<[string, number, boolean]>, boolean>>,
  Expect<Equal<Last<[{ a: number }, { b: string }]>, { b: string }>>,
  Expect<Equal<Last<[any, unknown, never]>, never>>,
  Expect<Equal<Last<[undefined, null]>, null>>,
  Expect<Equal<Last<[symbol, bigint]>, bigint>>,
  Expect<Equal<Last<[{ readonly a: string }, { a?: number }]>, { a?: number }>>,
  Expect<Equal<Last<readonly [readonly string[], readonly number[]]>, readonly number[]>>,

  // @ts-expect-error: type error
  Expect<Equal<Last<number>, never>>,
  // @ts-expect-error: type error
  Expect<Equal<Last<{}>, never>>,
];

// 성능 테스트
type LargeTuple = [
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

type PerformanceTest = [
  // 큰 튜플에서 마지막 요소 가져오기
  Expect<Equal<Last<LargeTuple>, 50>>,

  // 중첩된 튜플 테스트
  Expect<Equal<Last<[LargeTuple, string, number]>, number>>,

  // 복잡한 타입 테스트
  Expect<Equal<Last<[{ a: 1; b: 2 }, { c: 3; d: 4 }, { e: 5; f: 6 }]>, { e: 5; f: 6 }>>,

  // 재귀적 타입 테스트
  Expect<Equal<Last<[[1, 2], [3, 4], [5, 6]]>, [5, 6]>>,
];
