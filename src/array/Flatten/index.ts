import { Tuple } from '../../primitive';
import { Length } from '../Length';
import { Push } from '../Push';

type IsDepthExist<T extends Tuple> = T extends readonly [infer First, ...infer Rest]
  ? First extends Tuple
    ? true
    : IsDepthExist<Rest>
  : false;

type FlattenHelper<T extends Tuple> = T extends readonly [infer First, ...infer Rest]
  ? First extends Tuple
    ? [...First, ...FlattenHelper<Rest>]
    : [First, ...FlattenHelper<Rest>]
  : T;

/**
 *
 * Type to flatten an array of arrays
 *
 * 튜플의 튜플을 평탄화하는 유틸리티 타입
 *
 * @params T 평탄화할 튜플 타입
 *
 * @params D 평탄화할 깊이 (기본값: 1)
 *
 * @returns 지정된 깊이만큼 평탄화된 튜플을 반환합니다
 *
 * @example
 * type cases = [
 *   Expect<Equal<Flatten<[]>, []>>,
 *   Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
 *   Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
 *   Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
 *   Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
 *   Expect<Equal<Flatten<[1, [2, [3, [4, [5]]]]>, 3>, [1, 2, 3, 4, [5]]>>,
 *   Expect<Equal<Flatten<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/flatten
 *
 */

export type Flatten<T extends Tuple, D extends number = 1, A extends Tuple = []> =
  IsDepthExist<T> extends false
    ? T
    : Length<A> extends D
      ? T
      : Flatten<FlattenHelper<T>, D, Push<A, unknown>>;
