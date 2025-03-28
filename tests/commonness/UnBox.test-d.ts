import { Equal, Expect, UnBox } from '../../src/commonness';

type cases = [
  // Base cases
  Expect<Equal<UnBox<number>, number>>,
  Expect<Equal<UnBox<() => number>, number>>,
  Expect<Equal<UnBox<() => number | string>, number | string>>,
  Expect<Equal<UnBox<number[]>, number>>,
  Expect<Equal<UnBox<(number | string)[]>, number | string>>,
  Expect<Equal<UnBox<[number]>, number>>,
  Expect<Equal<UnBox<Promise<number>>, number>>,

  // Bonus: Recursion
  Expect<Equal<UnBox<() => Promise<() => Array<Promise<boolean>>>>, boolean>>,

  // Bonus: Recusion levels
  Expect<Equal<UnBox<() => () => () => () => number, 0>, number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 1>, () => () => () => number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 2>, () => () => number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 3>, () => number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 4>, number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 5>, number>>,
  Expect<Equal<UnBox<number[][][][], 0>, number>>,
  Expect<Equal<UnBox<number[][][][], 1>, number[][][]>>,
  Expect<Equal<UnBox<number[][][][], 2>, number[][]>>,
  Expect<Equal<UnBox<number[][][][], 3>, number[]>>,
  Expect<Equal<UnBox<number[][][][], 4>, number>>,
  Expect<Equal<UnBox<number[][][][], 5>, number>>,
  Expect<Equal<UnBox<[[[[number]]]], 0>, number>>,
  Expect<Equal<UnBox<[[[[number]]]], 1>, [[[number]]]>>,
  Expect<Equal<UnBox<[[[[number]]]], 2>, [[number]]>>,
  Expect<Equal<UnBox<[[[[number]]]], 3>, [number]>>,
  Expect<Equal<UnBox<[[[[number]]]], 4>, number>>,
  Expect<Equal<UnBox<[[[[number]]]], 5>, number>>,
  Expect<Equal<UnBox<Promise<Promise<Promise<number>>>, 0>, number>>,
  Expect<Equal<UnBox<Promise<Promise<Promise<number>>>, 1>, Promise<Promise<number>>>>,
  Expect<Equal<UnBox<Promise<Promise<Promise<number>>>, 2>, Promise<number>>>,
  Expect<Equal<UnBox<Promise<Promise<Promise<number>>>, 3>, number>>,
  Expect<Equal<UnBox<Promise<Promise<Promise<number>>>, 4>, number>>,

  // 혼합된 중첩 타입
  Expect<Equal<UnBox<Promise<number[]>>, number>>,
  Expect<Equal<UnBox<Promise<() => number>>, number>>,
  Expect<Equal<UnBox<() => number[]>, number>>,
  Expect<Equal<UnBox<() => Promise<number>>, number>>,

  Expect<
    Equal<
      UnBox<() => () => () => () => () => () => () => () => () => () => () => number>,
      () => number
    >
  >,

  // 빈 배열 및 튜플 테스트
  Expect<Equal<UnBox<[]>, never>>,
  Expect<Equal<UnBox<Array<never>>, never>>,

  // 복잡한 중첩 구조
  Expect<Equal<UnBox<Promise<() => [Promise<number[]>]>>, number>>,

  // 엣지 케이스
  Expect<Equal<UnBox<any>, any>>,
  Expect<Equal<UnBox<unknown>, unknown>>,
  Expect<Equal<UnBox<never>, never>>,
  Expect<Equal<UnBox<void>, void>>,
  Expect<Equal<UnBox<undefined>, undefined>>,
  Expect<Equal<UnBox<null>, null>>,
  Expect<Equal<UnBox<Promise<any>>, any>>,
  Expect<Equal<UnBox<Promise<unknown>>, unknown>>,
  Expect<Equal<UnBox<Promise<never>>, never>>,
  Expect<Equal<UnBox<() => void>, void>>,
  Expect<Equal<UnBox<() => undefined>, undefined>>,
  Expect<Equal<UnBox<() => null>, null>>,
  Expect<Equal<UnBox<() => never>, never>>,
  Expect<Equal<UnBox<() => any>, any>>,
  Expect<Equal<UnBox<() => unknown>, unknown>>,
  Expect<Equal<UnBox<readonly number[]>, number>>,
  Expect<Equal<UnBox<ReadonlyArray<string>>, string>>,
  Expect<Equal<UnBox<Promise<Promise<never>>>, never>>,
  Expect<Equal<UnBox<Promise<() => never>>, never>>,
  Expect<Equal<UnBox<() => Promise<never>>, never>>,
];
