import { ToNumber } from './../../string/ToNumber';
import { Tuple } from '../../primitive/Tuple';

/**
 *
 * Convert an array to an array of index strings
 *
 * 튜플을 인덱스 문자열 배열로 변환하는 타입
 *
 * @param T Tuple to convert / 변환할 튜플
 *
 * @returns Array of index strings / 인덱스 문자열 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToIndex<[1, 2, 3]>, [0, 1, 2]>>,
 *   Expect<Equal<ToIndex<['a', 'b', 'c']>, [0, 1, 2]>>,
 *   Expect<Equal<ToIndex<[1, 'a', 'b', 'c']>, [0, 1, 2, 3]>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/to-index
 *
 */
export type ToIndex<T extends Tuple> = { [P in keyof T]: ToNumber<P> };
