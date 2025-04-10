import { Equal, Expect } from '../../src/commonness';
import { LastIndexOf } from '../../src/string/LastIndexOf';

type cases = [
  Expect<Equal<LastIndexOf<'abc', 'a'>, 0>>,
  Expect<Equal<LastIndexOf<'abc', 'b'>, 1>>,
  Expect<Equal<LastIndexOf<'abc', 'c'>, 2>>,
  Expect<Equal<LastIndexOf<'abc', 'd'>, -1>>,
  Expect<Equal<LastIndexOf<'abcabc', 'abc'>, 3>>,
  Expect<Equal<LastIndexOf<'aaaaa', 'a'>, 4>>,
  Expect<Equal<LastIndexOf<'abcabc', 'd'>, -1>>,
  Expect<Equal<LastIndexOf<'abcabc', 'bc'>, 4>>,
  Expect<Equal<LastIndexOf<'abcabc', 'c'>, 5>>,
  // 엣지 케이스 추가
  Expect<Equal<LastIndexOf<'', 'a'>, -1>>,
  Expect<Equal<LastIndexOf<'a', ''>, -1>>,
  Expect<Equal<LastIndexOf<'', ''>, -1>>,
  Expect<Equal<LastIndexOf<'abc', 'abc'>, 0>>,
  Expect<Equal<LastIndexOf<'123', '2'>, 1>>,

  // 성능 테스트 케이스
  Expect<Equal<LastIndexOf<'abcdefghijklmnopqrstuvwxyz', 'z'>, 25>>,
  Expect<Equal<LastIndexOf<'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', 'z'>, 51>>,
  Expect<Equal<LastIndexOf<'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', 'za'>, 51>>,
  Expect<Equal<LastIndexOf<'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', '123'>, -1>>,
  Expect<Equal<LastIndexOf<'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaa'>, 37>>,

  // @ts-expect-error: type error
  LastIndexOf<'hello', 1>,
  // @ts-expect-error: type error
  LastIndexOf<123, 'a'>,
];
