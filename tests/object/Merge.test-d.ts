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

  // 엣지 케이스
  Expect<Equal<Merge<{}, { a: 1 }>, { a: 1 }>>,
  Expect<Equal<Merge<{ a: 1 }, {}>, { a: 1 }>>,
  Expect<Equal<Merge<{}, {}>, {}>>,
  Expect<Equal<Merge<{ a: undefined }, { a: null }>, { a: null }>>,
  Expect<Equal<Merge<{ a: null }, { a: undefined }>, { a: undefined }>>,
  Expect<Equal<Merge<{ a: { b: 1 } }, { a: { c: 2 } }>, { a: { c: 2 } }>>,
  Expect<Equal<Merge<{ a: never }, { b: unknown }>, { a: never; b: unknown }>>,
  Expect<Equal<Merge<{ a: any }, { a: string }>, { a: string }>>,
  Expect<Equal<Merge<{ 'a-b': number }, { 'a-b': string }>, { 'a-b': string }>>,
];
