import { Equal, Expect } from '../../src/commonness';
import { StartsWith } from '../../src/string';

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
  // 엣지 케이스
  Expect<Equal<StartsWith<'a', 'a'>, true>>,
  Expect<Equal<StartsWith<'', 'a'>, false>>,
  Expect<Equal<StartsWith<string, 'a'>, boolean>>,
  Expect<Equal<StartsWith<'a', string>, false>>,
  Expect<Equal<StartsWith<'안녕하세요', '안녕'>, true>>,
  Expect<Equal<StartsWith<'안녕하세요', '세요'>, false>>,
  Expect<Equal<StartsWith<'🍎🍌🍇', '🍎'>, true>>,
  Expect<Equal<StartsWith<'🍎🍌🍇', '🍌'>, false>>,
  Expect<Equal<StartsWith<'hello world', 'hello '>, true>>,
  Expect<Equal<StartsWith<'  abc', ' '>, true>>,
];
