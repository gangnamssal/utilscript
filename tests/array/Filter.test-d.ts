import { Equal, Expect } from '../../src/commonness';
import { Filter } from '../../src/array/Filter';
import { Falsy } from '../../src/primitive';

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
  Expect<Equal<Filter<['1', 2, null, undefined], Falsy>, [null, undefined]>>,
  Expect<Equal<Filter<[never, never, never], never>, [never, never, never]>>,
  Expect<Equal<Filter<['1', 2, null, undefined], number>, [2]>>,
];
