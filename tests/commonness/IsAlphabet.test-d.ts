import { Equal, Expect, IsAlphabet } from '../../src/commonness';

type cases = [
  Expect<Equal<IsAlphabet<'a'>, true>>,
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'1'>, false>>,
  Expect<Equal<IsAlphabet<'가'>, false>>,

  // @ts-expect-error: type error
  Expect<Equal<IsAlphabet<123>, false>>,
];
