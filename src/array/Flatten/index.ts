import { Tuple } from '../../primitive';

type IsDepthExist<T extends Tuple> = T extends [infer First, ...infer Rest]
  ? First extends Tuple
    ? true
    : IsDepthExist<Rest>
  : false;

type FlattenHelper<T extends Tuple> = T extends [infer First, ...infer Rest]
  ? First extends Tuple
    ? [...First, ...FlattenHelper<Rest>]
    : [First, ...FlattenHelper<Rest>]
  : T;

/**
 *
 * Type to flatten an array of arrays
 *
 * 배열의 배열을 평탄화하는 유틸리티 타입
 *
 * @params T 평탄화할 배열 타입
 * @params D 평탄화할 깊이 (기본값: 1)
 * @returns 지정된 깊이만큼 평탄화된 배열을 반환합니다
 *
 * @example
 * type cases = [
 *   Expect<Equal<Flatten<[]>, []>>,
 *   Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
 *   Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
 *   Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
 *   Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
 *   Expect<Equal<Flatten<[1, [2, [3, [4, [5]]]]>, 3>, [1, 2, 3, 4, [5]]>>,
 *   Expect<Equal<Flatten<[1, [2, [3, [4, [5]]]]>, 19260817>, [1, 2, 3, 4, 5]>>,
 * ]
 */

export type Flatten<T extends Tuple, D extends number = 1, A extends Tuple = []> =
  IsDepthExist<T> extends false
    ? T
    : A['length'] extends D
      ? T
      : Flatten<FlattenHelper<T>, D, [...A, unknown]>;
