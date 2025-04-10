import { Equal, Expect, UnBox } from '../../src/commonness';

// 성능 테스트를 위한 복잡한 타입 정의
type DeepNested1 = () => () => () => () => () => () => () => () => () => () => number;
type DeepNested2 = Promise<
  Promise<Promise<Promise<Promise<Promise<Promise<Promise<Promise<Promise<number>>>>>>>>>
>;
type DeepNested3 = number[][][][][][][][][][];
type DeepNested4 = [[[[[[[[[[[number]]]]]]]]]]];
type MixedNested = Promise<() => Promise<() => Promise<() => number[]>>>;

type cases = [
  // 기본 케이스
  Expect<Equal<UnBox<number>, number>>,
  Expect<Equal<UnBox<() => number>, number>>,
  Expect<Equal<UnBox<() => number | string>, number | string>>,
  Expect<Equal<UnBox<number[]>, number>>,
  Expect<Equal<UnBox<(number | string)[]>, number | string>>,
  Expect<Equal<UnBox<[number]>, number>>,
  Expect<Equal<UnBox<Promise<number>>, number>>,

  // 재귀 테스트
  Expect<Equal<UnBox<() => Promise<() => Array<Promise<boolean>>>>, boolean>>,

  // 재귀 레벨 테스트
  Expect<Equal<UnBox<() => () => () => () => number, 0>, number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 1>, () => () => () => number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 2>, () => () => number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 3>, () => number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 4>, number>>,
  Expect<Equal<UnBox<() => () => () => () => number, 5>, number>>,

  // 배열 중첩 테스트
  Expect<Equal<UnBox<number[][][][], 0>, number>>,
  Expect<Equal<UnBox<number[][][][], 1>, number[][][]>>,
  Expect<Equal<UnBox<number[][][][], 2>, number[][]>>,
  Expect<Equal<UnBox<number[][][][], 3>, number[]>>,
  Expect<Equal<UnBox<number[][][][], 4>, number>>,
  Expect<Equal<UnBox<number[][][][], 5>, number>>,

  // 튜플 중첩 테스트
  Expect<Equal<UnBox<[[[[number]]]], 0>, number>>,
  Expect<Equal<UnBox<[[[[number]]]], 1>, [[[number]]]>>,
  Expect<Equal<UnBox<[[[[number]]]], 2>, [[number]]>>,
  Expect<Equal<UnBox<[[[[number]]]], 3>, [number]>>,
  Expect<Equal<UnBox<[[[[number]]]], 4>, number>>,
  Expect<Equal<UnBox<[[[[number]]]], 5>, number>>,

  // Promise 중첩 테스트
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

  // 깊은 중첩 성능 테스트
  Expect<Equal<UnBox<DeepNested1>, number>>,
  Expect<Equal<UnBox<DeepNested2>, number>>,
  Expect<Equal<UnBox<DeepNested3>, number>>,
  Expect<Equal<UnBox<[[[[[[[[[[[number]]]]]]]]]]], 11>, number>>,
  Expect<Equal<UnBox<MixedNested>, number>>,

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

  // 추가 성능 테스트 케이스
  Expect<Equal<UnBox<DeepNested1, 5>, () => () => () => () => () => number>>,
  Expect<Equal<UnBox<DeepNested2, 5>, Promise<Promise<Promise<Promise<Promise<number>>>>>>>,
  Expect<Equal<UnBox<DeepNested3, 5>, number[][][][][]>>,
  Expect<Equal<UnBox<DeepNested4, 5>, [[[[[[number]]]]]]>>,
];
