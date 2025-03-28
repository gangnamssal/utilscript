import { IsTuple } from '../../commonness';
import { Tuple } from '../../primitive';
import { Includes } from '../Includes';
import { MatchReadonly } from '../MatchReadonly';
import { Push } from '../Push';

/**
 *
 * Type that takes an array and a value or array of values and returns a new array with the values removed
 *
 * 튜플과 값 또는 튜플을 받아 지정된 값을 제거한 새로운 튜플을 반환하는 타입
 *
 * @params T - Tuple to remove values from / 값을 제거할 튜플
 *
 * @params U - Values to remove / 제거할 값 또는 값 튜플
 *
 * @params R - Resulting array / 결과 튜플
 *
 * @returns Tuple with the values removed / 지정된 값을 제거한 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Without<[1, 2], 1>, [2]>>,
 *   Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
 *   Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
 *   Expect<Equal<Without<['a', 'b', 'c'], ['a', 'b']>, ['c']>>,
 *   Expect<Equal<Without<['abc', 'b', 'c'], ['a', 'b']>, ['abc', 'c']>>,
 *   Expect<Equal<Without<[1, never, null, undefined], Falsy>, [1]>>,
 *   Expect<Equal<Without<[1, 2, 3, never], never>, [1, 2, 3]>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/without
 *
 */
export type Without<T extends Tuple, U, R extends Tuple = []> = T extends readonly [
  infer TF,
  ...infer TR,
]
  ? IsTuple<U> extends true
    ? U extends Tuple
      ? Includes<U, TF> extends true
        ? Without<MatchReadonly<T, TR>, U, R>
        : Without<MatchReadonly<T, TR>, U, Push<R, TF>>
      : never
    : [TF] extends [U]
      ? Without<MatchReadonly<T, TR>, U, R>
      : Without<MatchReadonly<T, TR>, U, Push<R, TF>>
  : MatchReadonly<T, R>;
