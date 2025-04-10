import { Equal, Expect } from '../../src/commonness';
import { ToUnion } from '../../src/array/ToUnion';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<ToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<ToUnion<[123]>, 123>>,
  Expect<Equal<ToUnion<[]>, never>>,
  Expect<Equal<ToUnion<readonly [1, 2, 3]>, 1 | 2 | 3>>,
  Expect<Equal<ToUnion<[string, number, boolean]>, string | number | boolean>>,
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

type LargeUnion =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50;

// 대규모 튜플에 대한 성능 테스트
type PerformanceTest = Expect<Equal<ToUnion<LargeTuple>, LargeUnion>>;

// 복잡한 타입에 대한 성능 테스트
type ComplexTuple = [
  { id: 1; name: 'a' },
  { id: 2; name: 'b' },
  { id: 3; name: 'c' },
  { id: 4; name: 'd' },
  { id: 5; name: 'e' },
];

type ComplexUnion =
  | { id: 1; name: 'a' }
  | { id: 2; name: 'b' }
  | { id: 3; name: 'c' }
  | { id: 4; name: 'd' }
  | { id: 5; name: 'e' };

type ComplexPerformanceTest = Expect<Equal<ToUnion<ComplexTuple>, ComplexUnion>>;
