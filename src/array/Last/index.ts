import { Tuple } from './../../primitive';

/**
 *
 * Returns the last element of an array
 *
 * 튜플의 마지막 요소를 반환하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @returns Last element of array / 튜플의 마지막 요소
 *
 * @example
 * type cases = [
 *   Expect<Equal<Last<[]>, never>>,
 *   Expect<Equal<Last<[2]>, 2>>,
 *   Expect<Equal<Last<[3, 2, 1]>, 1>>,
 *   Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/last
 *
 */

export type Last<T extends Tuple> = T extends readonly [...Tuple, infer L] ? L : never;
