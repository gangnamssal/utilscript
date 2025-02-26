import { Expect } from '../../src/commonness';
import { PartialReadonly, Alike } from '../../src/object';

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

type cases = [
  Expect<Alike<PartialReadonly<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<PartialReadonly<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<PartialReadonly<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<PartialReadonly<Todo2, 'description'>, Expected>>,
  Expect<
    Alike<
      PartialReadonly<{ name: string; age: number }, 'name'>,
      { readonly name: string; age: number }
    >
  >,
];

// @ts-expect-error: not working in production
type error = MyReadonly2<Todo1, 'title' | 'invalid'>;
