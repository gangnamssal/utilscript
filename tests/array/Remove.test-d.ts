import { Equal, Expect } from '../../src/commonness';
import { Remove } from '../../src/array/Remove';
import { Falsy } from '../../src/primitive';

type cases = [
  Expect<Equal<Remove<[1, 2, 3, 4, 5], 2>, [1, 3, 4, 5]>>,
  Expect<Equal<Remove<[1, 2, 3, 4, 5], 6>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Remove<[1, 2, 3, 4, 5], number>, []>>,
  Expect<Equal<Remove<[1, never, null, undefined], Falsy>, [1]>>,
];
