import { Equal, Expect, If } from '../../src/commonness';

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
  // 엣지 케이스 추가
  Expect<Equal<If<true, 1, 0>, 1>>,
  Expect<Equal<If<false, 1, 0>, 0>>,
  Expect<Equal<If<true, string, number>, string>>,
  Expect<Equal<If<false, string, number>, number>>,
  Expect<Equal<If<true, null, undefined>, null>>,
  Expect<Equal<If<false, null, undefined>, undefined>>,
  Expect<Equal<If<true, [], {}>, []>>,
  Expect<Equal<If<false, [], {}>, {}>>,
];

// @ts-expect-error: type error
type error = If<null, 'a', 'b'>;
// @ts-expect-error: type error
type error2 = If<undefined, 'a', 'b'>;
// @ts-expect-error: type error
type error3 = If<number, 'a', 'b'>;
