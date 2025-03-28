import { Expect, NotEqual } from '../../src/commonness';

type cases = [
  // 기본 케이스
  Expect<NotEqual<1, 2>>,
  Expect<NotEqual<'a', 'b'>>,

  // 엣지 케이스
  Expect<NotEqual<any, unknown>>,
  Expect<NotEqual<never, unknown>>,
  Expect<NotEqual<never, any>>,
  Expect<NotEqual<{}, object>>,
  Expect<NotEqual<[], unknown[]>>,
  Expect<NotEqual<void, undefined>>,
  Expect<NotEqual<0, false>>,
  Expect<NotEqual<'', false>>,
  Expect<NotEqual<null, undefined>>,
  Expect<NotEqual<Promise<number>, Promise<string>>>,
];
