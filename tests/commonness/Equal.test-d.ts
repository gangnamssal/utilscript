import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<Equal<1, 1>, true>>,
  Expect<Equal<Equal<1, 2>, false>>,
  Expect<Equal<Equal<'a', 'a'>, true>>,
  Expect<Equal<Equal<'a', 'b'>, false>>,
  // 엣지 케이스
  Expect<Equal<Equal<true, true>, true>>,
  Expect<Equal<Equal<false, false>, true>>,
  Expect<Equal<Equal<true, false>, false>>,
  Expect<Equal<Equal<null, null>, true>>,
  Expect<Equal<Equal<undefined, undefined>, true>>,
  Expect<Equal<Equal<null, undefined>, false>>,
  Expect<Equal<Equal<{}, {}>, true>>,
  Expect<Equal<Equal<{ a: 1 }, { a: 1 }>, true>>,
  Expect<Equal<Equal<{ a: 1 }, { a: 2 }>, false>>,
  Expect<Equal<Equal<unknown, unknown>, true>>,
  Expect<Equal<Equal<never, never>, true>>,
  Expect<Equal<Equal<any, any>, true>>,
];
