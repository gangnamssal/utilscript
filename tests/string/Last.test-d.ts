import { Equal, Expect } from '../../src/commonness';
import { Last } from '../../src/string';

export type cases = [
  Expect<Equal<Last<'hello'>, 'o'>>,
  Expect<Equal<Last<'world'>, 'd'>>,
  Expect<Equal<Last<'typescript'>, 't'>>,
];
