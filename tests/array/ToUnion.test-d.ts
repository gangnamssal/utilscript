import { Equal, Expect } from '../../src/commonness';
import { ToUnion } from '../../src/array/ToUnion';

type cases = [
  Expect<Equal<ToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<ToUnion<[123]>, 123>>,
  Expect<Equal<ToUnion<[]>, never>>,
  Expect<Equal<ToUnion<readonly [1, 2, 3]>, 1 | 2 | 3>>,
  Expect<Equal<ToUnion<[string, number, boolean]>, string | number | boolean>>,
];
