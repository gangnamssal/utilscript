import { Equal, Expect, IsNever } from '../../src/commonness';

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<object>, false>>,
  // 엣지 케이스 추가
  Expect<Equal<IsNever<any>, false>>,
  Expect<Equal<IsNever<unknown>, false>>,
  Expect<Equal<IsNever<0>, false>>,
  Expect<Equal<IsNever<1>, false>>,
  Expect<Equal<IsNever<boolean>, false>>,
  Expect<Equal<IsNever<true>, false>>,
  Expect<Equal<IsNever<false>, false>>,
  Expect<Equal<IsNever<string>, false>>,
  Expect<Equal<IsNever<number>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
  Expect<Equal<IsNever<() => {}>, false>>,
  Expect<Equal<IsNever<() => void>, false>>,
  Expect<Equal<IsNever<never[]>, false>>,
];
