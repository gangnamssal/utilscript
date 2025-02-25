import { Equal, Expect } from '../../commonness';
import { Falsy, Tuple } from '../../primitive';

/**
 * 배열에서 특정 요소만 필터링하는 타입
 *
 * 배열에서 특정 요소와 일치하는 요소만 남기는 타입
 *
 * @param T 원본 배열
 * @param F 필터링할 요소 타입
 * @param R 결과 배열 (내부적으로 사용)
 * @returns 필터링된 배열
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

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
    Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
    Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
    Expect<Equal<Filter<['1', 2, null, undefined], Falsy>, [null, undefined]>>,
    Expect<Equal<Filter<[never, never, never], never>, [never, never, never]>>,
    Expect<Equal<Filter<['1', 2, null, undefined], number>, [2]>>,
  ];
}
