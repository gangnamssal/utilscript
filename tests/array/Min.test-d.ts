import { Equal, Expect } from '../../src/commonness';
import { Min } from '../../src/array';

type cases = [
  Expect<Equal<Min<[1, 2, 3]>, 1>>,
  Expect<Equal<Min<[2, 1]>, 1>>,
  Expect<Equal<Min<[3, 2, 1, 2]>, 1>>,
  Expect<Equal<Min<[3, 2, 0, 1, 0, 0, 0]>, 0>>,
  Expect<Equal<Min<[]>, never>>,
  Expect<Equal<Min<[0]>, 0>>,
  Expect<Equal<Min<[-1, -2, -3]>, -3>>,
  Expect<Equal<Min<[999, 1000, 998]>, 998>>,
  Expect<Equal<Min<[0, -0]>, -0>>,
  Expect<Equal<Min<[9007199254740991, -9007199254740991]>, -9007199254740991>>,
  Expect<Equal<Min<readonly [1, 2, 3]>, 1>>,
];
