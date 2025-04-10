import { Equal, Expect, IsUndefined } from '../../src/commonness';

type cases = [
  Expect<Equal<IsUndefined<undefined>, true>>,
  Expect<Equal<IsUndefined<null>, false>>,
  Expect<Equal<IsUndefined<number>, false>>,
  Expect<Equal<IsUndefined<string>, false>>,
  // 엣지 케이스 추가
  Expect<Equal<IsUndefined<never>, false>>,
  Expect<Equal<IsUndefined<unknown>, false>>,
  Expect<Equal<IsUndefined<any>, false>>,
  Expect<Equal<IsUndefined<void>, false>>,
  Expect<Equal<IsUndefined<{}>, false>>,
  Expect<Equal<IsUndefined<undefined | null>, false>>,
];
