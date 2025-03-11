import { Tuple } from './../../primitive';

/**
 *
 * Convert an array to a union
 *
 * 튜플을 유니온 타입으로 변환하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToUnion<[123, '456', true]>, 123 | '456' | true>>,
 *   Expect<Equal<ToUnion<[123]>, 123>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/to-union
 *
 */

export type ToUnion<T extends Tuple> = T[number];
