import { Equal, Expect } from '../../src/commonness';
import { IsUnion } from '../../src/commonness/IsUnion';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  // Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
  // Edge cases
  Expect<Equal<IsUnion<any>, false>>,
  Expect<Equal<IsUnion<unknown>, false>>,
  Expect<Equal<IsUnion<string | string>, false>>,
  Expect<Equal<IsUnion<string & number>, false>>,
  Expect<Equal<IsUnion<{} | (() => void)>, true>>,
  Expect<Equal<IsUnion<undefined | 0 | false>, true>>,
  Expect<Equal<IsUnion<boolean>, true>>, // boolean is actually true | false
];

// 성능 테스트
type LargeUnion =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

type ComplexUnion =
  | { type: 'a'; value: string }
  | { type: 'b'; value: number }
  | { type: 'c'; value: boolean }
  | { type: 'd'; value: symbol }
  | { type: 'e'; value: null }
  | { type: 'f'; value: undefined };

// 성능 테스트 케이스
type PerformanceCases = [
  Expect<Equal<IsUnion<LargeUnion>, true>>,
  Expect<Equal<IsUnion<ComplexUnion>, true>>,
  Expect<Equal<IsUnion<LargeUnion | ComplexUnion>, true>>,
  Expect<Equal<IsUnion<[LargeUnion]>, false>>,
  Expect<Equal<IsUnion<{ value: LargeUnion }>, false>>,
];

type T = IsUnion<{} | (() => void)>;
