import { Tuple } from '../../primitive';

/**
 *
 * Removes the first element from an array.
 *
 * 튜플의 첫 번째 요소를 제거합니다.
 *
 * @param T - The array type to shift / 쉬프트할 튜플 타입
 *
 * @returns Array with the first element removed / 첫 번째 요소가 제거된 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Shift<[1]>, []>>,
 *   Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/shift
 *
 */

export type Shift<T extends Tuple> = T extends readonly [infer _, ...infer Rest] ? Rest : [];
