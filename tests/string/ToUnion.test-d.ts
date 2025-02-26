import { Equal, Expect } from '../../src/commonness';
import { ToUnion } from '../../src/string';

type cases = [
  Expect<Equal<ToUnion<''>, never>>,
  Expect<Equal<ToUnion<'t'>, 't'>>,
  Expect<Equal<ToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<ToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>
  >,
];
