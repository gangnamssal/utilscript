import { Equal, Expect, IsPureBigint } from '../../src/commonness';

type cases = [
  Expect<Equal<IsPureBigint<bigint>, true>>,
  Expect<Equal<IsPureBigint<bigint | number>, false>>,
  Expect<Equal<IsPureBigint<number>, false>>,
  Expect<Equal<IsPureBigint<string>, false>>,
  Expect<Equal<IsPureBigint<boolean>, false>>,
  Expect<Equal<IsPureBigint<undefined>, false>>,
  Expect<Equal<IsPureBigint<null>, false>>,
  Expect<Equal<IsPureBigint<unknown>, false>>,
  Expect<Equal<IsPureBigint<any>, false>>,
  Expect<Equal<IsPureBigint<never>, false>>,
  Expect<Equal<IsPureBigint<{}>, false>>,
  Expect<Equal<IsPureBigint<123n>, false>>,
  Expect<Equal<IsPureBigint<123n | 456n>, false>>,
];
