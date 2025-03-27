import { Equal, Expect } from '../../src/commonness';
import { Take } from '../../src/array';

type cases = [
  Expect<Equal<Take<2, [1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Take<3, ['1', 2, true, false]>, ['1', 2, true]>>,
  Expect<Equal<Take<-2, [1, 2, 3]>, [2, 3]>>,
  Expect<Equal<Take<0, [1, 2, 3]>, []>>,
  Expect<Equal<Take<5, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<3, []>, []>>,
  // 추가 예외 케이스
  Expect<Equal<Take<-0, [1, 2, 3]>, []>>,
  Expect<Equal<Take<-5, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<-3, []>, []>>,
  Expect<Equal<Take<999, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<-999, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<1, [undefined, null]>, [undefined]>>,
  Expect<Equal<Take<-1, [undefined, null]>, [null]>>,
  Expect<Equal<Take<1, readonly [1, 2, 3]>, [1]>>,
  Expect<Equal<Take<-1, readonly [1, 2, 3]>, [3]>>,
];
