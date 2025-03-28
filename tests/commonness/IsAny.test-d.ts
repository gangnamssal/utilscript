import { Equal, IsAny, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
  Expect<Equal<IsAny<1>, false>>,
  Expect<Equal<IsAny<2>, false>>,
  Expect<Equal<IsAny<'123'>, false>>,
  // 엣지 케이스 추가
  Expect<Equal<IsAny<{}>, false>>,
  Expect<Equal<IsAny<[]>, false>>,
  Expect<Equal<IsAny<null>, false>>,
  Expect<Equal<IsAny<boolean>, false>>,
  Expect<Equal<IsAny<true>, false>>,
  Expect<Equal<IsAny<false>, false>>,
  Expect<Equal<IsAny<number>, false>>,
  Expect<Equal<IsAny<0>, false>>,
  Expect<Equal<IsAny<object>, false>>,
  Expect<Equal<IsAny<() => {}>, false>>,
  Expect<Equal<IsAny<() => void>, false>>,
  Expect<Equal<IsAny<symbol>, false>>,
  Expect<Equal<IsAny<bigint>, false>>,
  Expect<Equal<IsAny<Record<string, any>>, false>>,
  Expect<Equal<IsAny<any[]>, false>>,
];
