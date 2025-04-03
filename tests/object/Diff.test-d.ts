import { Diff } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type Foo = {
  name: string;
  age: string;
};

type Bar = {
  name: string;
  age: string;
  gender: number;
};

type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,

  // 엣지 케이스
  Expect<Equal<Diff<{}, {}>, {}>>,
  Expect<Equal<Diff<{}, { a: number }>, { a: number }>>,
  Expect<Equal<Diff<{ a: number }, {}>, { a: number }>>,
  Expect<Equal<Diff<{ a: string }, { a: number }>, { a: number }>>,
  Expect<Equal<Diff<{ a: string; b: number }, { a: string }>, { b: number }>>,
  Expect<Equal<Diff<{ a?: string }, { a: string }>, { a: string }>>,
  Expect<Equal<Diff<{ readonly a: string }, { a: string }>, {}>>,
];
