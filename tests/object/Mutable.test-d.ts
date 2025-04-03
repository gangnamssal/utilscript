import { Mutable } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,

  // 엣지 케이스
  Expect<Equal<Mutable<{}>, {}>>,
  Expect<Equal<Mutable<Readonly<{}>>, {}>>,
  Expect<Equal<Mutable<Readonly<{ readonly a?: number }>>, { a?: number }>>,
  Expect<Equal<Mutable<Readonly<{ readonly [k: string]: number }>>, { [k: string]: number }>>,
  Expect<Equal<Mutable<Readonly<{ readonly [k: number]: string }>>, { [k: number]: string }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: undefined }>>, { a: undefined }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: null }>>, { a: null }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: never }>>, { a: never }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: unknown }>>, { a: unknown }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: any }>>, { a: any }>>,
];

type errors = [
  // @ts-expect-error: not working in production
  Mutable<'string'>,
  // @ts-expect-error: not working in production
  Mutable<0>,
];
