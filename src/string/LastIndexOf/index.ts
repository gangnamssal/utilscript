import { Tuple } from '../../primitive';
import { Push } from '../../array';
import { Length } from '../../array/Length';
import { StartsWith } from '../StartWith';

/**
 * Type to find the last index of a substring in a string
 *
 * 문자열에서 특정 부분 문자열의 마지막 인덱스를 찾는 타입
 *
 * @param T String to search in / 검색할 문자열
 * @param U Substring to find / 찾을 부분 문자열
 * @returns Last index of the substring, -1 if not found / 부분 문자열의 마지막 인덱스, 찾지 못한 경우 -1
 *
 * @example
 * type cases = [
 *   Expect<Equal<LastIndexOf<'abc', 'a'>, 0>>,
 *   Expect<Equal<LastIndexOf<'abcabc', 'abc'>, 3>>,
 *   Expect<Equal<LastIndexOf<'aaaaa', 'a'>, 4>>,
 *   Expect<Equal<LastIndexOf<'abcabc', 'd'>, -1>>,
 * ]
 */

export type LastIndexOf<
  T extends string,
  U extends string,
  Accumulate extends Tuple = [],
  R extends number = -1,
> = T extends `${infer Current}${infer Rest}`
  ? StartsWith<U, Current> extends true
    ? LastIndexOf<Rest, U, Push<Accumulate, unknown>, Length<Accumulate>>
    : LastIndexOf<Rest, U, Push<Accumulate, unknown>, R>
  : R;
