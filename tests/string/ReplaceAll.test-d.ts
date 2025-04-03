import { Equal, Expect } from '../../src/commonness';
import { ReplaceAll } from '../../src/string';

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
  // 엣지케이스 추가
  Expect<Equal<ReplaceAll<'aaa', 'a', 'b'>, 'bbb'>>,
  Expect<Equal<ReplaceAll<'한글테스트한글', '한글', '영어'>, '영어테스트영어'>>,
  Expect<Equal<ReplaceAll<'abcabc', 'abc', ''>, ''>>,
  Expect<Equal<ReplaceAll<'abc', 'abc', 'def'>, 'def'>>,
  Expect<Equal<ReplaceAll<'', 'a', 'b'>, ''>>,
  Expect<Equal<ReplaceAll<'abc', '', 'def'>, 'abc'>>,
  Expect<Equal<ReplaceAll<'aabbcc', 'b', 'z'>, 'aazzcc'>>,
  Expect<Equal<ReplaceAll<'🚀🚀', '🚀', '🔥'>, '🔥🔥'>>,
];
