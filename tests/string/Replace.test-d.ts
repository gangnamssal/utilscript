import { Equal, Expect } from '../../src/commonness';
import { Replace } from '../../src/string';

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
  // 엣지케이스 추가
  Expect<Equal<Replace<'abc', 'abc', 'def'>, 'def'>>,
  Expect<Equal<Replace<'aaa', 'a', 'b'>, 'baa'>>,
  Expect<Equal<Replace<'한글테스트', '한글', '영어'>, '영어테스트'>>,
  Expect<Equal<Replace<'123', '4', '5'>, '123'>>,
  Expect<Equal<Replace<'', 'a', 'b'>, ''>>,
  Expect<Equal<Replace<'abc', '', 'def'>, 'abc'>>,
];
