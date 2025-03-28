import { Equal, Expect } from '../../src/commonness';
import { LastIndexOf } from '../../src/array';

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
  // 엣지 케이스
  Expect<Equal<LastIndexOf<[], 1>, -1>>,
  Expect<Equal<LastIndexOf<[undefined], undefined>, 0>>,
  Expect<Equal<LastIndexOf<[null], null>, 0>>,
  Expect<Equal<LastIndexOf<[1, 1, 1], 1>, 2>>,
  Expect<Equal<LastIndexOf<[never], never>, 0>>,
  // readonly 배열 테스트
  Expect<Equal<LastIndexOf<readonly [1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<readonly [2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  // @ts-expect-error: type error
  Expect<Equal<LastIndexOf<number, number>, -1>>,
  // @ts-expect-error: type error
  Expect<Equal<LastIndexOf<{}, number>, -1>>,
];
