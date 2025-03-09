import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<true, true>>,
  Expect<Equal<false, false>>,
  Expect<Equal<Equal<true, false>, false>>,
];
