import { Tuple } from '../../primitive';
import { Push } from '../Push';

/**
 *
 * Filter an array based on a specific type
 *
 * 특정 타입을 기준으로 튜플을 필터링하는 타입
 *
 * @param T The original array type / 원본 튜플
 *
 * @param F The type to filter / 필터링할 요소 타입
 *
 * @returns The filtered array type / 필터링된 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
 *   Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
 *   Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
 *   Expect<Equal<Filter<['1', 2, null, undefined], Falsy>, [null, undefined]>>,
 *   Expect<Equal<Filter<[never, never, never], never>, [never, never, never]>>,
 *   Expect<Equal<Filter<['1', 2, null, undefined], number>, [2]>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/filter
 *
 */

export type Filter<T extends Tuple, F, R extends Tuple = []> = T extends readonly [
  infer First,
  ...infer Rest,
]
  ? [First] extends readonly [F]
    ? Filter<Rest, F, Push<R, First>>
    : Filter<Rest, F, R>
  : R;
