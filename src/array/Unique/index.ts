import { Tuple } from '../../primitive';
import { Includes } from '../Includes';

/**
 * Type to remove duplicate elements from an array and keep only unique elements
 *
 * 배열에서 중복된 요소를 제거하고 유니크한 요소만 남기는 타입
 *
 * @param T Array to remove duplicates from / 중복 제거할 배열
 * @returns Array with unique elements / 유니크한 요소만 남은 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
 *   Expect<Equal<Unique<[1, 2, 3]>, [1, 2, 3]>>,
 *   Expect<Equal<Unique<[string, number, 1, "a", 1, string, 2, "a"]>, [string, number, 1, "a", 2]>>,
 * ]
 */

export type Unique<T, R extends Tuple = []> = T extends readonly [infer Current, ...infer Rest]
  ? Includes<R, Current> extends true
    ? Unique<Rest, R>
    : Unique<Rest, [...R, Current]>
  : R;
