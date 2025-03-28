import { Equal, Expect } from '../../src/commonness';
import { Push } from '../../src/array/Push';

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
  // 엣지 케이스 추가
  Expect<Equal<Push<readonly [1], 2>, readonly [1, 2]>>,
  Expect<Equal<Push<[], undefined>, [undefined]>>,
  Expect<Equal<Push<[], null>, [null]>>,
  Expect<Equal<Push<[any], never>, [any, never]>>,
  Expect<Equal<Push<readonly [], 'a'>, readonly ['a']>>,
  // 추가 엣지 케이스
  Expect<Equal<Push<readonly [1, 2, 3], 4>, readonly [1, 2, 3, 4]>>,
  Expect<Equal<Push<[1], [2, 3]>, [1, [2, 3]]>>,
  Expect<Equal<Push<[], []>, [[]]>>,
  // @ts-expect-error: type error
  Push<number, 1>,
  // @ts-expect-error: type error
  Push<string, 'a'>,
  // @ts-expect-error: type error
  Push<{ length: 10 }, 1>,
  // @ts-expect-error: type error
  Push<null, 1>,
  // @ts-expect-error: type error
  Push<undefined, 1>,
];
