import { Equal, Expect } from '../../src/commonness';
import { Concat } from '../../src/string';

type cases = [
  Expect<Equal<Concat<'abc', 'def'>, 'abcdef'>>,
  Expect<Equal<Concat<'123', '456'>, '123456'>>,
  Expect<Equal<Concat<'abc', '456'>, 'abc456'>>,

  // 엣지 케이스
  Expect<Equal<Concat<'', ''>, ''>>,
  Expect<Equal<Concat<'', 'abc'>, 'abc'>>,
  Expect<Equal<Concat<'abc', ''>, 'abc'>>,
  Expect<Equal<Concat<'한글', '테스트'>, '한글테스트'>>,
  Expect<Equal<Concat<'abc', '😎'>, 'abc😎'>>,
  Expect<Equal<Concat<'   ', 'abc'>, '   abc'>>,
  Expect<Equal<Concat<'abc', '   '>, 'abc   '>>,
];

// @ts-expect-error: type error
type error = Concat<null, undefined>;
// @ts-expect-error: 문자열이 아닌 경우
type error2 = Concat<123, '456'>;
// @ts-expect-error: 문자열이 아닌 경우
type error3 = Concat<'abc', 456>;
// @ts-expect-error: 문자열이 아닌 경우
type error4 = Concat<boolean, string>;
