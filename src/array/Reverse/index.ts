import { Tuple } from '../../primitive';

/**
 * Reverses an array.
 *
 * 배열을 반대로 뒤집습니다.
 *
 * @param T - The array type to reverse / 뒤집을 배열 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<Reverse<[]>, []>>,
 *   Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
 * ]
 */
export type Reverse<T extends Tuple> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T;
