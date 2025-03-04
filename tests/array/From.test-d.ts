import { Equal, Expect } from '../../src/commonness';
import { From } from '../../src/array';

type cases = [
  Expect<Equal<From<0>, []>>,
  Expect<Equal<From<2>, [unknown, unknown]>>,
  Expect<Equal<From<999>['length'], 999>>,
  // @ts-expect-error: type error
  Expect<Equal<From<1000>['length'], 1000>>,
];
