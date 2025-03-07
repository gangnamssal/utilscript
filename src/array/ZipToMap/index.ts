import { Append } from '../../object';
import { Tuple } from '../../primitive';

/**
 * Convert a tuple of tuples to a map
 *
 * 튜플의 튜플을 맵으로 변환
 *
 * @param T - Tuple of tuples to convert / 변환할 튜플의 튜플
 * @returns Converted map / 변환된 맵
 *
 * @example
 * type cases = [
 *   Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6]]>, { 1: 2; 3: 4; 5: 6 }>>,
 *   Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6], [7, 8]]>, { 1: 2; 3: 4; 5: 6; 7: 8 }>>,
 * ];
 */

export type ZipToMap<T extends Tuple<Tuple>, R = unknown> = T extends readonly [
  [infer Key extends PropertyKey, infer Value],
  ...infer Rest extends Tuple<Tuple>,
]
  ? ZipToMap<Rest, Append<R, Key, Value>>
  : R;
