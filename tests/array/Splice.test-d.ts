import { Equal, Expect } from '../../src/commonness';
import { Splice } from '../../src/array';

type cases = [
  Expect<Equal<Splice<[1, 2, 3], 1, 1>, [1, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 1, 2>, [1]>>,
  Expect<Equal<Splice<[1, 2, 3, 4], 1, 2>, [1, 4]>>,
  Expect<Equal<Splice<[1, 2, 3], 1, 0>, [1, 2, 3]>>,
  // 엣지 케이스 추가
  Expect<Equal<Splice<[], 0, 0>, []>>,
  Expect<Equal<Splice<[1, 2, 3], 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 0, 3>, []>>,
  Expect<Equal<Splice<[1, 2, 3], 3, 0>, [1, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 4, 0>, [1, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 0, 1, [9]>, [9, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 1, 1, [9, 10]>, [1, 9, 10, 3]>>,
  // 문자열 타입 테스트
  Expect<Equal<Splice<['a', 'b', 'c'], 1, 1>, ['a', 'c']>>,
  Expect<Equal<Splice<['hello', 'world'], 0, 1, ['typescript']>, ['typescript', 'world']>>,
  // 객체 타입 테스트
  Expect<Equal<Splice<[{ id: 1 }, { id: 2 }, { id: 3 }], 1, 1>, [{ id: 1 }, { id: 3 }]>>,
  // 혼합 타입 테스트
  Expect<Equal<Splice<[1, 'a', true], 1, 1, [false]>, [1, false, true]>>,
  // 유니온 타입 테스트
  Expect<Equal<Splice<[string | number, boolean], 0, 1, [null]>, [null, boolean]>>,
];
