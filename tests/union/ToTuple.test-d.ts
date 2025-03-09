import { Equal, Expect } from '../../src/commonness';
import { ToTuple } from '../../src/union/ToTuple';
import { ToUnion } from '../../src/array/ToUnion';

type cases = [
  Expect<Equal<ToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ToUnion<ToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ToUnion<ToTuple<'a'>>, 'a'>>,
  Expect<Equal<ToUnion<ToTuple<any>>, any>>,
  Expect<Equal<ToUnion<ToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ToUnion<ToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ToUnion<ToTuple<any | 1>>, any>>,
  Expect<Equal<ToUnion<ToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ToUnion<ToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ToUnion<ToTuple<never>>, never>>,
  Expect<
    Equal<
      ToUnion<ToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>,
      'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'
    >
  >,
];
