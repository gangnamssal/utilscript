import { ZipToMap } from '../../src/array';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6]]>, { 1: 2; 3: 4; 5: 6 }>>,
  Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6], [7, 8]]>, { 1: 2; 3: 4; 5: 6; 7: 8 }>>,
  Expect<Equal<ZipToMap<[]>, unknown>>,
  Expect<Equal<ZipToMap<[['a', 1], ['b', 2], ['c', 3]]>, { a: 1; b: 2; c: 3 }>>,
  Expect<Equal<ZipToMap<[['true', false], ['false', true]]>, { true: false; false: true }>>,
  Expect<
    Equal<ZipToMap<[['string', number], ['boolean', object]]>, { string: number; boolean: object }>
  >,
];
