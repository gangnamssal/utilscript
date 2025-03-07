import { Equal } from '../../commonness';
import { Push } from '../Push';
import { Length } from '../Length';
import { Tuple } from '../../primitive';

/**
 * Type that takes an array and a value and returns the last index of the value in the array
 *
 * 배열과 값을 받아 배열에서 해당 값의 마지막 인덱스를 반환하는 타입
 *
 * @params T - Array to search / 검색할 배열
 * @params U - Value to search for / 검색할 값
 * @returns Last index of the value in the array / 배열에서 해당 값의 마지막 인덱스
 *
 * @example
 * type cases = [
 *   Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
 *   Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
 *   Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
 *   Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
 *   Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
 * ];
 */
export type LastIndexOf<
  T extends Tuple,
  U,
  Accumulate extends Tuple = [],
  R extends number = -1,
> = T extends readonly [infer Current, ...infer Rest]
  ? Equal<Current, U> extends true
    ? LastIndexOf<Rest, U, Push<Accumulate, unknown>, Length<Accumulate>>
    : LastIndexOf<Rest, U, Push<Accumulate, unknown>, R>
  : R;
