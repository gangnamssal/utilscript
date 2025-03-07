import { ZipToMap } from '../../src/array';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6]]>, { 1: 2; 3: 4; 5: 6 }>>,
  Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6], [7, 8]]>, { 1: 2; 3: 4; 5: 6; 7: 8 }>>,
];
