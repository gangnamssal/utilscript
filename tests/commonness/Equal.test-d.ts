import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<Equal<1, 1>, true>>,
  Expect<Equal<Equal<1, 2>, false>>,
  Expect<Equal<Equal<'a', 'a'>, true>>,
  Expect<Equal<Equal<'a', 'b'>, false>>,
];
