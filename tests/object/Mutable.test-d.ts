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
];

type errors = [
  // @ts-expect-error: not working in production
  Mutable<'string'>,
  // @ts-expect-error: not working in production
  Mutable<0>,
];
