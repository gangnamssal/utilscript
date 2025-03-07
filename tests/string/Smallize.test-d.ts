import { Equal, Expect } from '../../src/commonness';
import { Smallize } from '../../src/string';

type cases = [
  Expect<Equal<Smallize<'FOOBAR'>, 'fOOBAR'>>,
  Expect<Equal<Smallize<'fooBar'>, 'fooBar'>>,
  Expect<Equal<Smallize<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<Smallize<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<Smallize<'FooBar'>, 'fooBar'>>,
  Expect<Equal<Smallize<'foobar'>, 'foobar'>>,
];
