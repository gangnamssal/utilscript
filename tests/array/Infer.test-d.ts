import { Infer } from '../../src/array';
import { Equal, Expect } from '../../src/commonness';

const tuple = ['a', 'b', 'c'] as const;

const number = [1, 2, 3];

const boolean = [true, false];

type cases = [
  Expect<Equal<Infer<[1, 2, 3]>, 1 | 2 | 3>>,
  Expect<Equal<Infer<['a', 'b', 'c']>, 'a' | 'b' | 'c'>>,
  Expect<Equal<Infer<typeof tuple>, 'a' | 'b' | 'c'>>,
  Expect<Equal<Infer<[true, false]>, true | false>>,
  Expect<Equal<Infer<[1, 'a', true]>, 1 | 'a' | true>>,
  Expect<Equal<Infer<typeof number>, number>>,
  Expect<Equal<Infer<typeof boolean>, boolean>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<'string'>, string>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<1>, 1>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<true>, true>>,
];
