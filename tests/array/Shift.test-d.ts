import { Expect, Equal } from '../../src/commonness';
import { Shift } from '../../src/array';

type cases = [
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
  // @ts-expect-error - type error
  Shift<unknown>,
];
