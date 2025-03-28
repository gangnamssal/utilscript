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
  Expect<Equal<Take<1, readonly [1, 2, 3]>, readonly [1]>>,
  Expect<Equal<Take<-1, readonly [1, 2, 3]>, readonly [3]>>,
  // 추가 엣지 케이스
  Expect<Equal<Take<0, readonly []>, readonly []>>,
  Expect<Equal<Take<-0, readonly []>, readonly []>>,
  Expect<Equal<Take<1, [any]>, [any]>>,
  Expect<Equal<Take<2, [boolean, number, string]>, [boolean, number]>>,
  Expect<Equal<Take<-2, [boolean, number, string]>, [number, string]>>,
  Expect<Equal<Take<2, [[1, 2], [3, 4]]>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Take<1, readonly [1]>, readonly [1]>>,
  Expect<Equal<Take<-1, readonly [1]>, readonly [1]>>,
  // 추가 엣지 케이스
  Expect<Equal<Take<0, readonly [1, 2, 3]>, readonly []>>,
  Expect<Equal<Take<2, readonly [1, 2, 3]>, readonly [1, 2]>>,
  Expect<Equal<Take<-2, readonly [1, 2, 3]>, readonly [2, 3]>>,
  Expect<Equal<Take<4, readonly [1, 2, 3]>, readonly [1, 2, 3]>>,
  Expect<Equal<Take<-4, readonly [1, 2, 3]>, readonly [1, 2, 3]>>,
  Expect<Equal<Take<1, [{}]>, [{}]>>,
  Expect<Equal<Take<2, [null, undefined, 0]>, [null, undefined]>>,
  Expect<Equal<Take<-2, [null, undefined, 0]>, [undefined, 0]>>,
  Expect<Equal<Take<0, [][]>, []>>,
  Expect<Equal<Take<1, [[1], [2], [3]]>, [[1]]>>,
  Expect<Equal<Take<-1, [[1], [2], [3]]>, [[3]]>>,
];

type errors = [
  // @ts-expect-error: type error
  Take<'string', [1, 2, 3]>,
  // @ts-expect-error: type error
  Take<2, { key: 'value' }>,
  // @ts-expect-error: type error
  Take<2, number>,
  // @ts-expect-error: type error
  Take<null, [1, 2, 3]>,
  // @ts-expect-error: type error
  Take<undefined, [1, 2, 3]>,
];

type T = Take<0, readonly []>;
