import { Tuple } from '../../primitive/Tuple';
import { MatchReadonly } from '../MatchReadonly';
import { Push } from '../Push';

/**
 *
 * Reverses an array.
 *
 * 튜플을 반대로 뒤집습니다.
 *
 * @param T - The array type to reverse / 뒤집을 튜플 타입
 *
 * @returns Reversed array / 뒤집힌 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Reverse<[]>, []>>,
 *   Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/reverse
 *
 */
export type Reverse<T extends Tuple> = T extends readonly [infer First, ...infer Rest]
  ? MatchReadonly<T, Push<Reverse<Rest>, First>>
  : T;
