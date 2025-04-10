import { Equal, Expect } from '../../src/commonness';
import { Smallize } from '../../src/string';

type cases = [
  Expect<Equal<Smallize<'FOOBAR'>, 'fOOBAR'>>,
  Expect<Equal<Smallize<'fooBar'>, 'fooBar'>>,
  Expect<Equal<Smallize<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<Smallize<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<Smallize<'FooBar'>, 'fooBar'>>,
  Expect<Equal<Smallize<'foobar'>, 'foobar'>>,
  // 엣지 케이스
  Expect<Equal<Smallize<''>, ''>>,
  Expect<Equal<Smallize<'A'>, 'a'>>,
  Expect<Equal<Smallize<'a'>, 'a'>>,
  Expect<Equal<Smallize<'123'>, '123'>>,
  Expect<Equal<Smallize<'123ABC'>, '123aBC'>>,
  Expect<Equal<Smallize<'F123'>, 'f123'>>,
  Expect<Equal<Smallize<'_FooBar'>, '_fooBar'>>,
  Expect<Equal<Smallize<'-FooBar'>, '-fooBar'>>,
];

// 성능 테스트
type LongString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
type SmallizedLongString =
  'aBCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
type PerformanceTest = Expect<Equal<Smallize<LongString>, SmallizedLongString>>;

// 복잡한 문자열 성능 테스트
type ComplexString = 'A_B-C123DEF_GHI-JKL';
type SmallizedComplexString = 'a_b-c123dEF_gHI-jKL';
type ComplexPerformanceTest = Expect<Equal<Smallize<ComplexString>, SmallizedComplexString>>;
