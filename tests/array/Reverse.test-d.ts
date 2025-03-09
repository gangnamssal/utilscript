import { Expect, Equal } from '../../src/commonness';
import { Reverse } from '../../src/array';

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
];

type errors = [
  // @ts-expect-error: type error
  Reverse<'string'>,
  // @ts-expect-error: type error
  Reverse<{ key: 'value' }>,
];
