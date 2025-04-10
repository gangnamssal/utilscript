import { Equal, Expect, IsAlphabet } from '../../src/commonness';

type cases = [
  Expect<Equal<IsAlphabet<'a'>, true>>,
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'1'>, false>>,
  Expect<Equal<IsAlphabet<'가'>, false>>,
  // 엣지 케이스 추가
  Expect<Equal<IsAlphabet<'z'>, true>>,
  Expect<Equal<IsAlphabet<'Z'>, true>>,
  Expect<Equal<IsAlphabet<''>, false>>,
  Expect<Equal<IsAlphabet<' '>, false>>,
  Expect<Equal<IsAlphabet<'!'>, false>>,
  Expect<Equal<IsAlphabet<'@'>, false>>,
  Expect<Equal<IsAlphabet<'a1'>, false>>,
  Expect<Equal<IsAlphabet<'1a'>, false>>,
  Expect<Equal<IsAlphabet<'abc'>, true>>,
  Expect<Equal<IsAlphabet<'ABC'>, true>>,
  Expect<Equal<IsAlphabet<'aBc'>, true>>,
  Expect<Equal<IsAlphabet<'a b'>, false>>,
  Expect<Equal<IsAlphabet<'a-b'>, false>>,
  Expect<Equal<IsAlphabet<'a_b'>, false>>,
  Expect<Equal<IsAlphabet<'한글'>, false>>,
  Expect<Equal<IsAlphabet<'123'>, false>>,
  Expect<Equal<IsAlphabet<'$'>, false>>,
  Expect<Equal<IsAlphabet<'#'>, false>>,

  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<123>, false>>,
  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<true>, false>>,
  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<null>, false>>,
  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<undefined>, false>>,
  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<{}>, false>>,
  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<[]>, false>>,
  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<symbol>, false>>,
];

// 성능 테스트
type LongAlphabetString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
type LongNonAlphabetString = '1234567890!@#$%^&*()_+-=[]{}|;:,.<>?/';
type MixedString = 'abc123XYZ!@#';
type VeryLongAlphabetString = `${LongAlphabetString}${LongAlphabetString}${LongAlphabetString}`;

type PerformanceCases = [
  // 긴 알파벳 문자열 테스트
  Expect<Equal<IsAlphabet<LongAlphabetString>, true>>,
  // 긴 비알파벳 문자열 테스트
  Expect<Equal<IsAlphabet<LongNonAlphabetString>, false>>,
  // 혼합 문자열 테스트
  Expect<Equal<IsAlphabet<MixedString>, false>>,
  // 매우 긴 알파벳 문자열 테스트 (재귀 깊이 테스트)
  Expect<Equal<IsAlphabet<VeryLongAlphabetString>, true>>,
];
