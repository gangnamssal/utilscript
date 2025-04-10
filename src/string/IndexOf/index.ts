import { Length } from '../../array/Length';
import { Push } from '../../array/Push';
import { Equal } from '../../commonness/Equal';
import { Tuple } from '../../primitive';

/**
 *
 * Type that takes a string and a value and returns the index of the value in the string
 *
 * 문자열과 값을 받아 문자열에서 값의 인덱스를 반환하는 타입
 *
 * @params S - String to search in / 검색할 문자열
 *
 * @params U - Value to search for / 검색할 값
 *
 * @returns Index of the value in the string / 문자열에서 값의 인덱스
 *
 * @example
 * type cases = [
 *   Expect<Equal<IndexOf<'hello', 'e'>, 1>>,
 *   Expect<Equal<IndexOf<'hello', 'o'>, 4>>,
 *   Expect<Equal<IndexOf<'hello', 'x'>, -1>>,
 *   Expect<Equal<IndexOf<'hello', 'el'>, 1>>,
 *   Expect<Equal<IndexOf<'hello', 'lo'>, 2>>,
 *   Expect<Equal<IndexOf<'hello', ''>, -1>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-string/index-of
 *
 */

export type IndexOf<
  S extends string,
  U extends string,
  Accumulator extends Tuple = [],
> = S extends `${infer Current}${infer Rest}`
  ? U extends `${infer UC}${string}`
    ? Equal<Current, UC> extends true
      ? Length<Accumulator>
      : IndexOf<Rest, U, Push<Accumulator, unknown>>
    : -1
  : -1;
