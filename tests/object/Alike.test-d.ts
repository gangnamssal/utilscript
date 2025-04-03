import { Alike } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<Alike<{ a: 1 }, { a: 1 }>, true>>,
  Expect<Equal<Alike<{ a: 1 }, { a: 2 }>, false>>,

  // 엣지 케이스
  Expect<Equal<Alike<{}, {}>, true>>,
  Expect<Equal<Alike<{ a: 1 }, {}>, false>>,
  Expect<Equal<Alike<{}, { a: 1 }>, false>>,
  Expect<Equal<Alike<{ a: null }, { a: undefined }>, false>>,
  Expect<Equal<Alike<{ a: undefined }, { a?: undefined }>, false>>,
  Expect<Equal<Alike<{ a: readonly string[] }, { a: string[] }>, false>>,
  Expect<Equal<Alike<{ a: { b: 1 } }, { a: { b: 1; c: 2 } }>, false>>,
  Expect<Equal<Alike<null, undefined>, false>>,
  Expect<Equal<Alike<1, 1n>, false>>,
];
