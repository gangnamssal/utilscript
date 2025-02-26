import { Tuple } from '../../primitive';

/**
 * Type to return the length of a string
 *
 * 문자열의 길이를 반환하는 타입
 *
 * @param S String / 문자열
 * @returns Length of string / 문자열의 길이
 *
 * @example
 * type cases = [
 *   Expect<Equal<Length<'abc'>, 3>>,
 *   Expect<Equal<Length<''>, 0>>,
 * ]
 */

export type Length<S extends string, T extends Tuple = []> = S extends `${infer _}${infer Rest}`
  ? Length<Rest, [...T, unknown]>
  : T['length'];
