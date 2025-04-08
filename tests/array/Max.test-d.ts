import { Equal, Expect } from '../../src/commonness';
import { Max } from '../../src/array';

type cases = [
  Expect<Equal<Max<[3, 2, 1]>, 3>>,
  Expect<Equal<Max<[5, 4, 7, 2, 9]>, 9>>,
  Expect<Equal<Max<[1, 1, 1]>, 1>>,
  Expect<Equal<Max<[-1, -2, -3]>, -1>>,
  Expect<Equal<Max<[0]>, 0>>,
  Expect<Equal<Max<[]>, never>>,
];
