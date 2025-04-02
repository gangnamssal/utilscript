import { Equal, Expect } from '../../src/commonness';
import { Includes } from '../../src/string';

type cases = [
  Expect<Equal<Includes<'hello', 'e'>, true>>,
  Expect<Equal<Includes<'hello', 'a'>, false>>,
  Expect<Equal<Includes<'hello', 'lo'>, true>>,
  Expect<Equal<Includes<'hello', 'o'>, true>>,
  // 엣지 케이스 추가
  Expect<Equal<Includes<'', ''>, true>>,
  Expect<Equal<Includes<'hello', ''>, true>>,
  Expect<Equal<Includes<'', 'hello'>, false>>,
  Expect<Equal<Includes<'hello', 'hello'>, true>>,
  Expect<Equal<Includes<'hello world', 'o w'>, true>>,
  Expect<Equal<Includes<'hello', 'hello world'>, false>>,
];
