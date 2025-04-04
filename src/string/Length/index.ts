import { Push } from '../../array';
import { Tuple } from '../../primitive';

/**
 *
 * Type to return the length of a string
 *
 * 문자열의 길이를 반환하는 타입
 *
 * @param S String / 문자열
 *
 * @returns Length of string / 문자열의 길이
 *
 * @example
 * type cases = [
 *   Expect<Equal<Length<'abc'>, 3>>,
 *   Expect<Equal<Length<''>, 0>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-string/length
 *
 */

export type Length<S extends string, T extends Tuple = []> = S extends `${string}${infer Rest}`
  ? Length<Rest, Push<T, unknown>>
  : T['length'];
