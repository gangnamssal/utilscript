import { Tuple } from '../../primitive/Tuple';

/**
 *
 * Convert a tuple to an object
 *
 * 튜플을 객체로 변환하는 타입
 *
 * @param T Tuple to convert / 변환할 튜플
 *
 * @returns Object with keys from the tuple / 튜플의 키를 가진 객체
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToObject<['a', 'b', 'c']>, { a: 'a', b: 'b', c: 'c' }>>,
 *   ]
 *
 * @link https://www.utilscript.site/docs/usage-array/to-object
 *
 */
export type ToObject<T extends Tuple<PropertyKey>> = {
  [key in T[number]]: key;
};
