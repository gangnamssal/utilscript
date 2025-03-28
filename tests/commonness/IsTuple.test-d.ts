import { Equal, Expect, IsTuple } from '../../src/commonness';

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
  // 엣지 케이스 추가
  Expect<Equal<IsTuple<any>, false>>,
  Expect<Equal<IsTuple<unknown>, false>>,
  Expect<Equal<IsTuple<string>, false>>,
  Expect<Equal<IsTuple<number>, false>>,
  Expect<Equal<IsTuple<boolean>, false>>,
  Expect<Equal<IsTuple<object>, false>>,
  Expect<Equal<IsTuple<{}>, false>>,
  Expect<Equal<IsTuple<() => {}>, false>>,
  Expect<Equal<IsTuple<() => void>, false>>,
  Expect<Equal<IsTuple<readonly number[]>, false>>,
  Expect<Equal<IsTuple<[number, string, ...boolean[]]>, false>>,
  Expect<Equal<IsTuple<readonly [number, ...string[]]>, false>>,
];
