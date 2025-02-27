import { Tuple } from '../../primitive';
import { Includes } from '../Includes';

/**
 * Type that takes an array and a value or array of values and returns a new array with the values removed
 *
 * 배열과 값 또는 배열을 받아 지정된 값을 제거한 새로운 배열을 반환하는 타입
 *
 * @params T - Array to remove values from / 값을 제거할 배열
 * @params U - Values to remove / 제거할 값 또는 값 배열
 * @params R - Resulting array / 결과 배열
 * @returns Array with the values removed / 지정된 값을 제거한 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Without<[1, 2], 1>, [2]>>,
 *   Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
 *   Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
 * ];
 */
export type Without<
  T extends Tuple,
  U extends number | Tuple<number>,
  R extends Tuple = [],
> = T extends [infer TF, ...infer TR]
  ? U extends Tuple
    ? Includes<U, TF> extends true
      ? Without<TR, U, R>
      : Without<TR, U, [...R, TF]>
    : TF extends U
      ? Without<TR, U, R>
      : Without<TR, U, [...R, TF]>
  : R;
