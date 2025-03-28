import { Equal, Expect } from '../../src/commonness';
import { Unique } from '../../src/array';

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
  Expect<Equal<Unique<[]>, []>>,
  Expect<Equal<Unique<[null, null, undefined, undefined]>, [null, undefined]>>,
  Expect<Equal<Unique<[symbol, symbol, bigint, bigint]>, [symbol, bigint]>>,
  Expect<Equal<Unique<[1, 1, 1, 1, 1]>, [1]>>,
  Expect<Equal<Unique<[object, object, {}]>, [object, {}]>>,
  Expect<Equal<Unique<readonly [1, 1, 2, 2, 3, 3]>, readonly [1, 2, 3]>>,
  Expect<Equal<Unique<readonly [1, 'a', 2, 'b', 2, 'a']>, readonly [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<readonly [string, number, string, number]>, readonly [string, number]>>,
];
