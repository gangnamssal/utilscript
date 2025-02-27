import { Tuple } from '../../primitive';

/**
 * Type that takes two arrays and returns a new array with elements at each index paired as tuples
 *
 * 두 개의 배열을 받아 각 인덱스의 요소를 튜플로 묶어 새로운 배열을 반환하는 타입
 *
 * @params T - First array type / 첫 번째 배열 타입
 * @params U - Second array type / 두 번째 배열 타입
 * @returns Array of paired tuples / 튜플로 묶인 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Zip<[], []>, []>>,
 *   Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
 *   Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
 *   Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
 *   Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
 * ];
 */
export type Zip<T extends Tuple, U extends Tuple, R extends Tuple = []> = T extends [
  infer FT,
  ...infer RT,
]
  ? U extends [infer FU, ...infer RU]
    ? Zip<RT, RU, [...R, [FT, FU]]>
    : R
  : R;
