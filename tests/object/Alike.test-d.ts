import { Alike } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<Alike<{ a: 1 }, { a: 1 }>, true>>,
  Expect<Equal<Alike<{ a: 1 }, { a: 2 }>, false>>,
];
