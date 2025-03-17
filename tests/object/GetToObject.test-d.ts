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
];
