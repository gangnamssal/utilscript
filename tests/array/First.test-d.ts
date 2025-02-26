import { Equal, Expect } from '../../src/commonness';
import { First } from '../../src/array/First';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<typeof tuple>, 'tesla'>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
];

type errors = [
  // @ts-expect-error: type error
  First<'notArray'>,
  // @ts-expect-error: type error
  First<{ 0: 'arrayLike' }>,
];
