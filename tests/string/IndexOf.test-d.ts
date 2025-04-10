import { Equal, Expect } from '../../src/commonness';
import { IndexOf } from '../../src/string';

type cases = [
  Expect<Equal<IndexOf<'hello', 'e'>, 1>>,
  Expect<Equal<IndexOf<'hello', 'o'>, 4>>,
  Expect<Equal<IndexOf<'hello', 'x'>, -1>>,
  Expect<Equal<IndexOf<'hello', 'el'>, 1>>,
  Expect<Equal<IndexOf<'hello', 'lo'>, 2>>,
  Expect<Equal<IndexOf<'hello', ''>, -1>>,
  Expect<Equal<IndexOf<'', 'a'>, -1>>,
  Expect<Equal<IndexOf<'aaa', 'a'>, 0>>,
  Expect<Equal<IndexOf<'abcabc', 'abc'>, 0>>,
  Expect<Equal<IndexOf<'abcabc', 'abc'>, 0>>,
  Expect<Equal<IndexOf<'안녕하세요', '하'>, 2>>,

  // 성능 테스트 케이스
  Expect<Equal<IndexOf<'abcdefghijklmnopqrstuvwxyz', 'z'>, 25>>,
  Expect<Equal<IndexOf<'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', 'z'>, 25>>,
  Expect<Equal<IndexOf<'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', 'za'>, 25>>,
  Expect<Equal<IndexOf<'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', '123'>, -1>>,
  Expect<Equal<IndexOf<'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaa'>, 0>>,

  // @ts-expect-error: type error
  IndexOf<'hello', 1>,
  // @ts-expect-error: type error
  IndexOf<123, 'a'>,
];
