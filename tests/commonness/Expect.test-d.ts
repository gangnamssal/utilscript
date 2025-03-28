import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<true, true>>,
  Expect<Equal<false, false>>,
  Expect<Equal<Equal<true, false>, false>>,
  // 엣지 케이스 추가
  Expect<Equal<0, 0>>,
  Expect<Equal<1, 1>>,
  Expect<Equal<'', ''>>,
  Expect<Equal<[], []>>,
  Expect<Equal<{}, {}>>,
  Expect<Equal<null, null>>,
  Expect<Equal<undefined, undefined>>,
  Expect<Equal<never, never>>,
  Expect<Equal<unknown, unknown>>,
  Expect<Equal<any, any>>,
];
