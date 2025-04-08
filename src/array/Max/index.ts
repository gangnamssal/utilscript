import { If } from '../../commonness';
import { GreaterThan } from '../../number';
import { Tuple } from '../../primitive';

/**
 *
 * Type to find the maximum value in a tuple of numbers
 *
 * 숫자 튜플에서 최대값을 찾는 타입
 *
 * @param T Tuple of numbers / 숫자 튜플
 *
 * @returns Maximum value in the tuple / 튜플 내 최대값
 *
 * @example
 * type cases = [
 *   Expect<Equal<Max<[3, 2, 1]>, 3>>,
 *   Expect<Equal<Max<[5, 4, 7, 2, 9]>, 9>>,
 *   Expect<Equal<Max<[1, 1, 1]>, 1>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/max
 *
 */

export type Max<T extends Tuple<number>, R extends number = T[0]> = T extends readonly [
  infer First extends number,
  ...infer Rest extends Tuple<number>,
]
  ? If<GreaterThan<R, First>, Max<Rest, R>, Max<Rest, First>>
  : R extends undefined
    ? never
    : R;
