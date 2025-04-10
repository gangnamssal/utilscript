import { Tuple } from '../../primitive/Tuple';

/**
 *
 * Type to return the length of an array
 *
 * 배열의 길이를 반환하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @returns Length of tuple / 튜플의 길이
 *
 * @example
 * type cases = [
 *   Expect<Equal<Length<[1, 2, 3]>, 3>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/length
 *
 */

export type Length<T extends Tuple> = T['length'];
