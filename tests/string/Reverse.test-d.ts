import { Equal, Expect } from '../../src/commonness';
import { Reversed } from '../../src/string';

type cases = [
  Expect<Equal<Reversed<'hello'>, 'olleh'>>,
  Expect<Equal<Reversed<'world'>, 'dlrow'>>,
  Expect<Equal<Reversed<'typescript'>, 'tpircsepyt'>>,
  Expect<Equal<Reversed<'1234567890'>, '0987654321'>>,
];
