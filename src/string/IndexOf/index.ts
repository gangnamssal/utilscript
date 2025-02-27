import { Equal } from '../../commonness';
import { Tuple } from '../../primitive';

/**
 * Type that takes a string and a value and returns the index of the value in the string
 *
 * 문자열과 값을 받아 문자열에서 값의 인덱스를 반환하는 타입
 *
 * @params S - String to search in / 검색할 문자열
 * @params U - Value to search for / 검색할 값
 * @params Accumulator - Accumulator for the index / 인덱스를 누적할 누적기
 * @returns Index of the value in the string / 문자열에서 값의 인덱스
 *
 * @example
 * type cases = [
 *   Expect<Equal<IndexOf<'hello', 'e'>, 1>>,
 *   Expect<Equal<IndexOf<'hello', 'o'>, 4>>,
 *   Expect<Equal<IndexOf<'hello', 'x'>, -1>>,
 * ];
 */

export type IndexOf<
  S extends string,
  U extends string,
  Accumulator extends Tuple = [],
> = S extends `${infer Current}${infer Rest}`
  ? U extends `${infer UC}${string}`
    ? Equal<Current, UC> extends true
      ? Accumulator['length']
      : IndexOf<Rest, U, [...Accumulator, unknown]>
    : -1
  : -1;
