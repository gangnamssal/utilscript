import { Equal, Expect } from '../../src/commonness';
import { Filter } from '../../src/array/Filter';
import { Falsy } from '../../src/primitive';

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
  Expect<Equal<Filter<['1', 2, null, undefined], Falsy>, [null, undefined]>>,
  Expect<Equal<Filter<[never, never, never], never>, [never, never, never]>>,
  Expect<Equal<Filter<['1', 2, null, undefined], number>, [2]>>,
  // 엣지 케이스
  Expect<Equal<Filter<[], any>, []>>,
  Expect<Equal<Filter<[1, 'a', true], boolean>, [true]>>,
  Expect<Equal<Filter<[1, 2, 3], never>, []>>,
  Expect<Equal<Filter<[string | number, 1, 2], string>, []>>,
  Expect<Equal<Filter<[any, 1, 2], 1>, [1]>>,
  Expect<Equal<Filter<[unknown, 1, 2], unknown>, [unknown, 1, 2]>>,
  // readonly 엣지 케이스
  Expect<Equal<Filter<readonly [1, 2, 3], 2>, readonly [2]>>,
  Expect<Equal<Filter<readonly [1, 'a', true], string>, readonly ['a']>>,
  Expect<Equal<Filter<readonly [0, 1, false, 2, ''], Falsy>, readonly [0, false, '']>>,
  // 성능 테스트 케이스
  Expect<
    Equal<
      Filter<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], number>,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    >
  >,
  Expect<
    Equal<
      Filter<
        [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, 'f', 7, 'g', 8, 'h', 9, 'i', 10, 'j'],
        string
      >,
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    >
  >,
  Expect<
    Equal<
      Filter<
        [0, '', false, null, undefined, 1, 'a', true, 0, '', false, null, undefined, 2, 'b', true],
        Falsy
      >,
      [0, '', false, null, undefined, 0, '', false, null, undefined]
    >
  >,
  Expect<
    Equal<
      Filter<
        readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        5 | 10 | 15 | 20
      >,
      readonly [5, 10, 15, 20]
    >
  >,
];
