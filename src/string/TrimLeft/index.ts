import { Blank } from '../../primitive';

/**
 * Type to remove whitespace from the left side of a string
 * 문자열의 왼쪽 공백을 제거하는 타입
 *
 * @param S String / 문자열
 * @returns String with left whitespace removed / 왼쪽 공백이 제거된 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<TrimLeft<'  Hello World  '>, 'Hello World  '>>,
 *   Expect<Equal<TrimLeft<'    \n\t foo bar '>, 'foo bar '>>,
 *   Expect<Equal<TrimLeft<''>, ''>>,
 * ]
 */

export type TrimLeft<S extends string> = S extends `${Blank}${infer Rest}` ? TrimLeft<Rest> : S;
