import { Equal, Expect } from '../../src/commonness';
import { Last } from '../../src/array/Last';

const arr = [1, 2, 3];

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
];
