import { Tuple } from '../../primitive/Tuple';
import { Length } from '../Length';
/**
 *
 * Type to return the first element of an array
 *
 * 튜플의 첫 번째 요소를 반환하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @returns First element of array / 튜플의 첫 번째 요소
 *
 * @example
 * type cases = [
 *   Expect<Equal<First<[3, 2, 1]>, 3>>,
 *   Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/first
 *
 */
export type First<T extends Tuple> = Length<T> extends 0 ? never : T[0];
