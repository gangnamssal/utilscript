import { Tuple } from '../../primitive';
import { Push } from '../Push';

/**
 *
 * Type that takes two tuples and returns a new tuple with elements at each index paired as tuples
 *
 * 두 개의 튜플을 받아 각 인덱스의 요소를 튜플로 묶어 새로운 튜플을 반환하는 타입
 *
 * @params T - First tuple type / 첫 번째 튜플 타입
 *
 * @params U - Second tuple type / 두 번째 튜플 타입
 *
 * @returns Tuple of paired tuples / 튜플로 묶인 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Zip<[], []>, []>>,
 *   Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
 *   Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
 *   Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
 *   Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/zip
 *
 */
export type Zip<T extends Tuple, U extends Tuple, R extends Tuple = []> = T extends readonly [
  infer FT,
  ...infer RT,
]
  ? U extends readonly [infer FU, ...infer RU]
    ? Zip<RT, RU, Push<R, [FT, FU]>>
    : R
  : R;
