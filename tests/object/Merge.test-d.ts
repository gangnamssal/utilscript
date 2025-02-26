import { Merge } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >,
  Expect<Equal<Merge<{ a: 1 }, { b: 2 }>, { a: 1; b: 2 }>>,
  Expect<Equal<Merge<{ a: 1 }, { a: 2 }>, { a: 2 }>>,
  Expect<Equal<Merge<{ a: 1 }, { a: 2; b: 2 }>, { a: 2; b: 2 }>>,
];
