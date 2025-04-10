import { Extends } from '../../commonness/Extends';
import { If } from '../../commonness/If';
import { GreaterThan } from '../../number/GreaterThan';
import { Tuple } from '../../primitive/Tuple';

/**
 *
 * Type to find the minimum value in a tuple of numbers
 *
 * 숫자 튜플에서 최소값을 찾는 타입
 *
 * @param T Tuple of numbers / 숫자 튜플
 *
 * @returns Minimum value in the tuple / 튜플 내 최소값
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<Min<[3, 2, 1]>, 1>>,
 *   Expect<Equal<Min<[5, 4, 7, 2, 9]>, 2>>,
 *   Expect<Equal<Min<[1, 1, 1]>, 1>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/min
 *
 */

export type Min<T extends Tuple<number>, R extends number = T[0]> = T extends readonly [
  infer First extends number,
  ...infer Rest extends Tuple<number>,
]
  ? GreaterThan<R, First> extends true
    ? Min<Rest, First>
    : Min<Rest, R>
  : Extends<R, undefined> extends true
    ? never
    : R;
