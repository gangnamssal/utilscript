import { Equal, Expect } from '../../src/commonness';
import { Concat } from '../../src/string';

type cases = [
  Expect<Equal<Concat<'abc', 'def'>, 'abcdef'>>,
  Expect<Equal<Concat<'123', '456'>, '123456'>>,
  Expect<Equal<Concat<'abc', '456'>, 'abc456'>>,
];

// @ts-expect-error: type error
type error = Concat<null, undefined>;
