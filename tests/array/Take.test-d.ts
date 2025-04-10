import { Equal, Expect } from '../../src/commonness';
import { Take } from '../../src/array';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Take<2, [1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Take<3, ['1', 2, true, false]>, ['1', 2, true]>>,
  Expect<Equal<Take<-2, [1, 2, 3]>, [2, 3]>>,
  Expect<Equal<Take<0, [1, 2, 3]>, []>>,
  Expect<Equal<Take<5, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<3, []>, []>>,
  // 추가 예외 케이스
  Expect<Equal<Take<-0, [1, 2, 3]>, []>>,
  Expect<Equal<Take<-5, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<-3, []>, []>>,
  Expect<Equal<Take<999, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<-999, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<1, [undefined, null]>, [undefined]>>,
  Expect<Equal<Take<-1, [undefined, null]>, [null]>>,
  Expect<Equal<Take<1, readonly [1, 2, 3]>, readonly [1]>>,
  Expect<Equal<Take<-1, readonly [1, 2, 3]>, readonly [3]>>,
  // 추가 엣지 케이스
  Expect<Equal<Take<0, readonly []>, readonly []>>,
  Expect<Equal<Take<-0, readonly []>, readonly []>>,
  Expect<Equal<Take<1, [any]>, [any]>>,
  Expect<Equal<Take<2, [boolean, number, string]>, [boolean, number]>>,
  Expect<Equal<Take<-2, [boolean, number, string]>, [number, string]>>,
  Expect<Equal<Take<2, [[1, 2], [3, 4]]>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Take<1, readonly [1]>, readonly [1]>>,
  Expect<Equal<Take<-1, readonly [1]>, readonly [1]>>,
  // 추가 엣지 케이스
  Expect<Equal<Take<0, readonly [1, 2, 3]>, readonly []>>,
  Expect<Equal<Take<2, readonly [1, 2, 3]>, readonly [1, 2]>>,
  Expect<Equal<Take<-2, readonly [1, 2, 3]>, readonly [2, 3]>>,
  Expect<Equal<Take<4, readonly [1, 2, 3]>, readonly [1, 2, 3]>>,
  Expect<Equal<Take<-4, readonly [1, 2, 3]>, readonly [1, 2, 3]>>,
  Expect<Equal<Take<1, [{}]>, [{}]>>,
  Expect<Equal<Take<2, [null, undefined, 0]>, [null, undefined]>>,
  Expect<Equal<Take<-2, [null, undefined, 0]>, [undefined, 0]>>,
  Expect<Equal<Take<0, [][]>, []>>,
  Expect<Equal<Take<1, [[1], [2], [3]]>, [[1]]>>,
  Expect<Equal<Take<-1, [[1], [2], [3]]>, [[3]]>>,
];

// 타입 에러 테스트
type errors = [
  // @ts-expect-error: type error
  Take<'string', [1, 2, 3]>,
  // @ts-expect-error: type error
  Take<2, { key: 'value' }>,
  // @ts-expect-error: type error
  Take<2, number>,
  // @ts-expect-error: type error
  Take<null, [1, 2, 3]>,
  // @ts-expect-error: type error
  Take<undefined, [1, 2, 3]>,
];

// 성능 테스트
type LongArray = [
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

// 긴 배열에서 앞부분 가져오기 성능 테스트
type PerformanceTest1 = Take<10, LongArray>;
// 긴 배열에서 뒷부분 가져오기 성능 테스트
type PerformanceTest2 = Take<-10, LongArray>;
// 전체 배열 가져오기 성능 테스트
type PerformanceTest3 = Take<50, LongArray>;
// 배열보다 큰 수로 가져오기 성능 테스트
type PerformanceTest4 = Take<100, LongArray>;
// 0개 가져오기 성능 테스트
type PerformanceTest5 = Take<0, LongArray>;

// 기본 테스트
type T = Take<0, readonly []>;
