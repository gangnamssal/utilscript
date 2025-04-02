import { Equal, Expect } from '../../src/commonness';
import { ToUnion } from '../../src/string';

type cases = [
  Expect<Equal<ToUnion<''>, never>>,
  Expect<Equal<ToUnion<'t'>, 't'>>,
  Expect<Equal<ToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<ToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>
  >,
  // 엣지 케이스
  Expect<Equal<ToUnion<string>, string>>,
  Expect<Equal<ToUnion<'123'>, '1' | '2' | '3'>>,
  Expect<Equal<ToUnion<'한글'>, '한' | '글'>>,
  Expect<Equal<ToUnion<'a b c'>, 'a' | ' ' | 'b' | ' ' | 'c'>>,
  Expect<Equal<ToUnion<'!@#'>, '!' | '@' | '#'>>,
];
