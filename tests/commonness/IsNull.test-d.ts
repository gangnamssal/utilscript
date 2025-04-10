import { Equal, Expect, IsNull } from '../../src/commonness';

type cases = [
  Expect<Equal<IsNull<null>, true>>,
  Expect<Equal<IsNull<undefined>, false>>,
  Expect<Equal<IsNull<number>, false>>,
  Expect<Equal<IsNull<string>, false>>,
  // 엣지 케이스
  Expect<Equal<IsNull<never>, false>>,
  Expect<Equal<IsNull<unknown>, false>>,
  Expect<Equal<IsNull<any>, false>>,
  Expect<Equal<IsNull<{}>, false>>,
  Expect<Equal<IsNull<[]>, false>>,
  Expect<Equal<IsNull<() => void>, false>>,
  Expect<Equal<IsNull<{ a: null }>, false>>,
  Expect<Equal<IsNull<{ a: null | undefined }>, false>>,
  Expect<Equal<IsNull<{ a: null | undefined | void }>, false>>,
  Expect<Equal<IsNull<{ a: null | undefined | void | unknown }>, false>>,
  Expect<Equal<IsNull<{ a: null | undefined | void | unknown | any }>, false>>,
  Expect<Equal<IsNull<{ a: null | undefined | void | unknown | any }>, false>>,
];
