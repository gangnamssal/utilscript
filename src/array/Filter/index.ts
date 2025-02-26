import { Tuple } from '../../primitive';

/**
 * Filter an array based on a specific type
 * 특정 타입을 기준으로 배열을 필터링하는 타입
 *
 * @param T The original array type / 원본 배열
 * @param F The type to filter / 필터링할 요소 타입
 * @returns The filtered array type / 필터링된 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
 *   Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
 *   Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
 *   Expect<Equal<Filter<['1', 2, null, undefined], Falsy>, [null, undefined]>>,
 *   Expect<Equal<Filter<[never, never, never], never>, [never, never, never]>>,
 *   Expect<Equal<Filter<['1', 2, null, undefined], number>, [2]>>,
 * ];
 */

export type Filter<T extends Tuple, F, R extends Tuple = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? [First] extends [F]
    ? Filter<Rest, F, [...R, First]>
    : Filter<Rest, F, R>
  : R;
