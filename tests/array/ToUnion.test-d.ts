import { Equal, Expect } from '../../src/commonness';
import { ToUnion } from '../../src/array/ToUnion';

type cases = [
  Expect<Equal<ToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<ToUnion<[123]>, 123>>,
];
