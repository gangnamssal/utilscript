import { Equal, Expect } from '../../src/commonness';
import { Includes } from '../../src/string';

type cases = [
  Expect<Equal<Includes<'hello', 'e'>, true>>,
  Expect<Equal<Includes<'hello', 'a'>, false>>,
  Expect<Equal<Includes<'hello', 'lo'>, true>>,
  Expect<Equal<Includes<'hello', 'o'>, true>>,
];
