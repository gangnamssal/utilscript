import { Equal, Expect } from '../../src/commonness';
import { Unshift } from '../../src/array/Unshift';

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
  // 추가된 엣지 케이스
  Expect<Equal<Unshift<readonly [1], 2>, readonly [2, 1]>>,
  Expect<Equal<Unshift<readonly [1, 2, 3], 0>, readonly [0, 1, 2, 3]>>,
  Expect<Equal<Unshift<readonly [], string>, readonly [string]>>,
  Expect<Equal<Unshift<[], any>, [any]>>,
  Expect<Equal<Unshift<[], unknown>, [unknown]>>,
  Expect<Equal<Unshift<[], never>, [never]>>,
  Expect<Equal<Unshift<[1, 2, 3], null>, [null, 1, 2, 3]>>,
  Expect<Equal<Unshift<[1, 2, 3], undefined>, [undefined, 1, 2, 3]>>,
  Expect<Equal<Unshift<[string, number], boolean>, [boolean, string, number]>>,
  Expect<Equal<Unshift<readonly [string, number], boolean>, readonly [boolean, string, number]>>,
  Expect<Equal<Unshift<readonly [1, 2, 3], 0>, readonly [0, 1, 2, 3]>>,
  Expect<Equal<Unshift<readonly [], string>, readonly [string]>>,
  Expect<Equal<Unshift<[], any>, [any]>>,
  Expect<Equal<Unshift<[], unknown>, [unknown]>>,
  Expect<Equal<Unshift<[], never>, [never]>>,
];
