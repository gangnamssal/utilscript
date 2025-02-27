import { Tuple } from '../../primitive';
import { Length } from '../Length';
/**
 * Type to return the first element of an array
 *
 * 배열의 첫 번째 요소를 반환하는 타입
 *
 * @param T Tuple / 튜플
 * @returns First element of array / 배열의 첫 번째 요소
 *
 * @example
 * type cases = [
 *   Expect<Equal<First<[3, 2, 1]>, 3>>,
 *   Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
 * ]
 */
export type First<T extends Tuple> = Length<T> extends 0 ? never : T[0];
