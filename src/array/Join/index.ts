import { Tuple } from '../../primitive';

/**
 * Type that takes an array of strings and a separator and returns a string with the array elements joined by the separator
 *
 * 문자열 배열과 구분자를 받아 배열 요소를 구분자로 결합한 문자열을 반환하는 타입
 *
 * @params T - Array of strings to join / 결합할 문자열 배열
 * @params U - Separator to join the array elements / 배열 요소를 결합할 구분자
 * @params R - Accumulator for the joined string / 결합된 문자열을 누적할 누적기
 * @returns Joined string / 결합된 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
 *   Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
 *   Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
 *   Expect<Equal<Join<['o'], 'u'>, 'o'>>,
 *   Expect<Equal<Join<[], 'u'>, ''>>,
 *   Expect<Equal<Join<['1', '1', '1']>, '1,1,1'>>,
 * ];
 */
export type Join<
  T extends Tuple<string | number>,
  U extends string | number = ',',
  R extends string = '',
> = T extends [infer Current extends string | number, ...infer Rest extends Tuple<string | number>]
  ? Rest['length'] extends 0
    ? Join<Rest, U, `${R}${Current}`>
    : Join<Rest, U, `${R}${Current}${U}`>
  : R;
