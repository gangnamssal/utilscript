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
];
