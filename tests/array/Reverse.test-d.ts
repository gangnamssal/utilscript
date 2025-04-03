import { Expect, Equal } from '../../src/commonness';
import { Reverse } from '../../src/array';

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
  // 엣지 케이스 추가
  Expect<Equal<Reverse<[1]>, [1]>>,
  Expect<Equal<Reverse<readonly [1, 2, 3]>, readonly [3, 2, 1]>>,
  Expect<Equal<Reverse<readonly []>, readonly []>>,
  Expect<Equal<Reverse<readonly [1]>, readonly [1]>>,
  // 추가 엣지 케이스
  Expect<Equal<Reverse<[boolean, number, string]>, [string, number, boolean]>>,
  Expect<Equal<Reverse<[any]>, [any]>>,
  Expect<Equal<Reverse<readonly [1, 2, 3, 4, 5]>, readonly [5, 4, 3, 2, 1]>>,
  Expect<Equal<Reverse<[][]>, [][]>>,
  Expect<Equal<Reverse<[[1, 2], [3, 4]]>, [[3, 4], [1, 2]]>>,
  // 더 많은 엣지 케이스
  Expect<Equal<Reverse<[never]>, [never]>>,
  Expect<Equal<Reverse<[unknown, any, never]>, [never, any, unknown]>>,
  Expect<Equal<Reverse<readonly [string, ...number[]]>, readonly [...number[], string]>>,
  Expect<Equal<Reverse<readonly [[1, 2, 3], [4, 5, 6]]>, readonly [[4, 5, 6], [1, 2, 3]]>>,
  Expect<Equal<Reverse<[{ a: 1 }, { b: 2 }]>, [{ b: 2 }, { a: 1 }]>>,
  Expect<Equal<Reverse<[() => void, () => string]>, [() => string, () => void]>>,
];

type errors = [
  // @ts-expect-error: type error
  Reverse<'string'>,
  // @ts-expect-error: type error
  Reverse<{ key: 'value' }>,
  // @ts-expect-error: type error
  Reverse<number>,
  // @ts-expect-error: type error
  Reverse<null>,
  // @ts-expect-error: type error
  Reverse<undefined>,
];
