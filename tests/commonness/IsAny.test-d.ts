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
];
