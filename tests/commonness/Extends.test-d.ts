import { Equal, Expect, Extends } from '../../src/commonness';

type cases = [
  Expect<Equal<Extends<string, string>, true>>,
  Expect<Equal<Extends<string, number>, false>>,
  Expect<Equal<Extends<string, string | number>, true>>,
  Expect<Equal<Extends<string | number, string>, false>>,
  Expect<Equal<Extends<never, any>, true>>,
  Expect<Equal<Extends<any, never>, false>>,
  Expect<Equal<Extends<unknown, any>, true>>,
  Expect<Equal<Extends<any, unknown>, true>>,
  Expect<Equal<Extends<[], unknown[]>, true>>,
  Expect<Equal<Extends<[1, 2, 3], number[]>, true>>,
  Expect<Equal<Extends<number[], [1, 2, 3]>, false>>,
  // 추가 엣지 케이스
  Expect<Equal<Extends<void, undefined>, false>>,
  Expect<Equal<Extends<undefined, void>, true>>,
  Expect<Equal<Extends<null, undefined>, false>>,
  Expect<Equal<Extends<undefined, null>, false>>,
  Expect<Equal<Extends<{}, object>, true>>,
  Expect<Equal<Extends<object, {}>, true>>,
  Expect<Equal<Extends<() => {}, object>, true>>,
  Expect<Equal<Extends<object, () => {}>, false>>,
  Expect<Equal<Extends<never, never>, true>>,
  Expect<Equal<Extends<unknown, unknown>, true>>,
  Expect<Equal<Extends<readonly [1, 2], [1, 2]>, false>>,
  Expect<Equal<Extends<[1, 2], readonly [1, 2]>, true>>,
  Expect<Equal<Extends<`1`, `${number}`>, true>>,
  // 더 많은 엣지 케이스
  Expect<Equal<Extends<Promise<string>, Promise<unknown>>, true>>,
  Expect<Equal<Extends<Promise<unknown>, Promise<string>>, false>>,
  Expect<Equal<Extends<Record<string, number>, { [key: string]: number }>, true>>,
  Expect<Equal<Extends<{ a: 1; b: 2 }, { a: number }>, true>>,
  Expect<Equal<Extends<{ a: number }, { a: 1; b: 2 }>, false>>,
  Expect<Equal<Extends<symbol, PropertyKey>, true>>,
  Expect<Equal<Extends<PropertyKey, symbol>, false>>,
  Expect<Equal<Extends<bigint, number>, false>>,
  Expect<Equal<Extends<number, bigint>, false>>,
  Expect<Equal<Extends<`${bigint}`, string>, true>>,
  Expect<Equal<Extends<() => void, (...args: any[]) => any>, true>>,
  Expect<Equal<Extends<(a: number) => void, (a: number) => void>, true>>,
  Expect<Equal<Extends<{ a: number }, { a: number }>, true>>,
  Expect<Equal<Extends<{ a: number }, { a: number; b: number }>, false>>,
  Expect<Equal<Extends<{ a: number; b: number }, { a: number }>, true>>,
];
