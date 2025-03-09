import { Equal } from '../../commonness';
import { Tuple } from '../../primitive';
import { Length } from '../Length';
import { Push } from '../Push';

/**
 * Type that takes an array and a value and returns the index of the value in the array
 *
 * 배열과 값을 받아 배열에서 값의 인덱스를 반환하는 타입
 *
 * @params T - Array to search in / 검색할 배열
 * @params U - Value to search for / 검색할 값
 * @params Accumulator - Accumulator for the index / 인덱스를 누적할 누적기
 * @returns Index of the value in the array / 배열에서 값의 인덱스
 *
 * @example
 * type cases = [
 *   Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
 *   Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
 *   Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
 * ];
 */
export type IndexOf<T extends Tuple, U, Accumulator extends Tuple = []> = T extends readonly [
  infer Current,
  ...infer Rest,
]
  ? Equal<Current, U> extends true
    ? Length<Accumulator>
    : IndexOf<Rest, U, Push<Accumulator, unknown>>
  : -1;
