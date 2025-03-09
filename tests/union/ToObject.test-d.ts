import { Equal, Expect } from '../../src/commonness';
import { ToObject } from '../../src/union';

type cases = [
  Expect<Equal<ToObject<'a' | 'b' | 'c'>, { a: 'a'; b: 'b'; c: 'c' }>>,
  Expect<Equal<ToObject<'a'>, { a: 'a' }>>,
  Expect<Equal<ToObject<string>, { [x: string]: string }>>,
  Expect<Equal<ToObject<'a' | 1>, { a: 'a'; 1: 1 }>>,

  Expect<Equal<ToObject<never>, {}>>,
];
