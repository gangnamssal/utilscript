import { Tuple } from '../../primitive';

/**
 * Removes the first element from an array.
 * 배열의 첫 번째 요소를 제거합니다.
 *
 * @param T - The array type to shift / 쉬프트할 배열 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<Shift<[1]>, []>>,
 *   Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>
 * ]
 */

export type Shift<T extends Tuple> = T extends readonly [infer _, ...infer Rest] ? Rest : [];
