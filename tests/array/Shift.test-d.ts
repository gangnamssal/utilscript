import { Expect, Equal } from '../../src/commonness';
import { Shift } from '../../src/array';

type cases = [
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
  // 엣지 케이스 추가
  Expect<Equal<Shift<readonly [1, 2, 3]>, readonly [2, 3]>>,
  Expect<Equal<Shift<readonly [1]>, readonly []>>,
  Expect<Equal<Shift<readonly []>, readonly []>>,
  // 추가 엣지 케이스
  Expect<Equal<Shift<[boolean, number, string]>, [number, string]>>,
  Expect<Equal<Shift<[any]>, []>>,
  Expect<Equal<Shift<[[1, 2], [3, 4]]>, [[3, 4]]>>,
];

type errors = [
  // @ts-expect-error: type error
  Shift<unknown>,
  // @ts-expect-error: type error
  Shift<'string'>,
  // @ts-expect-error: type error
  Shift<{ key: 'value' }>,
  // @ts-expect-error: type error
  Shift<number>,
  // @ts-expect-error: type error
  Shift<null>,
  // @ts-expect-error: type error
  Shift<undefined>,
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
];

type ShiftPerformanceTest = Shift<LargeTuple>;
type ShiftNestedTest = Shift<Shift<Shift<LargeTuple>>>;

// 재귀적 성능 테스트
type RecursiveShift<T extends any[], Count extends number = 5> = Count extends 0
  ? T
  : RecursiveShift<Shift<T>, [-1, 0, 1, 2, 3, 4][Count]>;

type RecursiveShiftTest = RecursiveShift<LargeTuple>;
