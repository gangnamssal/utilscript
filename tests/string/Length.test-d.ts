import { Equal, Expect } from '../../src/commonness';
import { Length } from '../../src/string';

type cases = [Expect<Equal<Length<'abc'>, 3>>, Expect<Equal<Length<''>, 0>>];

type errors = [
  // @ts-expect-error: type error
  Length<5>,
  // @ts-expect-error: type error
  Length<[1, 2, 3]>,
];
