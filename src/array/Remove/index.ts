import { Tuple } from '../../primitive';

/**
 * Remove specific elements from an array type
 * 배열에서 특정 요소를 제거하는 타입
 *
 * A type that removes elements that match a specific type from an array
 * 배열에서 특정 요소와 일치하는 요소를 제거하는 타입
 *
 * @param T The original array type / 원본 배열
 * @param F The type to remove / 제거할 요소
 * @returns Array with specified elements removed / 특정 요소가 제거된 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Remove<[1, 2, 3, 4, 5], 2>, [1, 3, 4, 5]>>,
 *   Expect<Equal<Remove<[1, 2, 3, 4, 5], 6>, [1, 2, 3, 4, 5]>>,
 *   Expect<Equal<Remove<[1, 2, 3, 4, 5], number>, []>>,
 *   Expect<Equal<Remove<[1, never, null, undefined], Falsy>, [1]>>,
 * ];
 */
export type Remove<T extends Tuple, F, R extends Tuple = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? [First] extends [F]
    ? Remove<Rest, F, R>
    : Remove<Rest, F, [...R, First]>
  : R;
