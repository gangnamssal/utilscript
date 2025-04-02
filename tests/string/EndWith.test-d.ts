import { Equal, Expect } from '../../src/commonness';
import { EndsWith } from '../../src/string';

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', ''>, true>>,
  Expect<Equal<EndsWith<'abc', ' '>, false>>,

  // 엣지 케이스
  Expect<Equal<EndsWith<'', ''>, true>>,
  Expect<Equal<EndsWith<'', 'a'>, false>>,
  Expect<Equal<EndsWith<'123', '23'>, true>>,
  Expect<Equal<EndsWith<'123', '123'>, true>>,
  Expect<Equal<EndsWith<'😎', '😎'>, true>>,
  Expect<Equal<EndsWith<'hello world', 'world'>, true>>,
  Expect<Equal<EndsWith<'hello world', 'hello'>, false>>,
  Expect<Equal<EndsWith<'   ', ' '>, true>>,
  Expect<Equal<EndsWith<'   ', '  '>, true>>,
  Expect<Equal<EndsWith<'abc', 'ABC'>, false>>,
];
