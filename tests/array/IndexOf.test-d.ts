import { Equal, Expect } from '../../src/commonness';
import { IndexOf } from '../../src/array';

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
  // 엣지 케이스 추가
  Expect<Equal<IndexOf<[], 1>, -1>>,
  Expect<Equal<IndexOf<[undefined], undefined>, 0>>,
  Expect<Equal<IndexOf<[null], null>, 0>>,
  Expect<Equal<IndexOf<[1, 2, 3, 2], 2>, 1>>,
  Expect<Equal<IndexOf<[false, true], false>, 0>>,
  Expect<Equal<IndexOf<[false, true], boolean>, -1>>,
  // readonly 엣지 케이스 추가
  Expect<Equal<IndexOf<readonly [1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<readonly [2, 6, 3, 8, 4], 3>, 2>>,
  Expect<Equal<IndexOf<readonly [], 1>, -1>>,
  Expect<Equal<IndexOf<readonly [undefined], undefined>, 0>>,
  Expect<Equal<IndexOf<readonly [1, 2, 3, 2], 2>, 1>>,
  // 복합 엣지 케이스
  Expect<Equal<IndexOf<readonly [1, 2, 3] | [1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<readonly [1] & [1], 1>, 0>>,
];
