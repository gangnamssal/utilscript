import { GetToObject } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<GetToObject<{ a: 1 }, 'a'>, { a: 1 }>>,
  Expect<Equal<GetToObject<{ a: 1 }, 'b'>, never>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2 }, 'a'>, { a: 1 }>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2 }, 'b'>, { b: 2 }>>,
  Expect<Equal<GetToObject<{ a: { b: 1 } }, 'a'>, { a: { b: 1 } }>>,
  Expect<Equal<GetToObject<{ a: { b: 1 } }, 'a.b'>, { a: { b: 1 } }>>,
  Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.b.c'>, { a: { b: { c: 1 } } }>>,
  Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.b.d'>, never>>,
  Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.k.d'>, never>>,
  Expect<Equal<GetToObject<{ a: { b: 1; c: 2 } }, 'a.b'>, { a: { b: 1 } }>>,
  Expect<Equal<GetToObject<{ a: { b: 1; c: 2 } }, 'a.c'>, { a: { c: 2 } }>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2; c: 3 }, 'a'>, { a: 1 }>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2; c: 3 }, 'c'>, { c: 3 }>>,

  // 엣지 케이스
  Expect<Equal<GetToObject<{}, 'key'>, never>>,
  Expect<Equal<GetToObject<{ a: null }, 'a'>, { a: null }>>,
  Expect<Equal<GetToObject<{ a: undefined }, 'a'>, { a: undefined }>>,
  Expect<Equal<GetToObject<{ 'a.b.c': number }, 'a.b.c'>, { 'a.b.c': number }>>,
  Expect<Equal<GetToObject<{ '': { empty: boolean } }, ''>, { '': { empty: boolean } }>>,
  Expect<Equal<GetToObject<{ '': { empty: boolean } }, '.empty'>, { '': { empty: boolean } }>>,
  Expect<Equal<GetToObject<{ foo: { bar: { baz: string } } }, 'foo.bar.baz.qux'>, never>>,
  Expect<Equal<GetToObject<{ foo: { bar: { baz: string } } }, ''>, never>>,
];
