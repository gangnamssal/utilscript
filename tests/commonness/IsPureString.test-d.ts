import { Equal, Expect, IsPureString } from '../../src/commonness';

type cases = [
  Expect<Equal<IsPureString<string>, true>>,
  Expect<Equal<IsPureString<string | number>, false>>,
  Expect<Equal<IsPureString<'hello'>, false>>,
  Expect<Equal<IsPureString<any>, false>>,
  Expect<Equal<IsPureString<unknown>, false>>,
  Expect<Equal<IsPureString<never>, false>>,
  Expect<Equal<IsPureString<{}>, false>>,
  Expect<Equal<IsPureString<string[]>, false>>,
  Expect<Equal<IsPureString<null>, false>>,
  Expect<Equal<IsPureString<undefined>, false>>,
];
