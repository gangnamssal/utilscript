import { Blank } from '../../primitive';

/**
 *
 * Type to remove whitespace from both sides of a string
 *
 * 문자열의 양쪽 공백을 제거하는 타입
 *
 * @param S String / 문자열
 *
 * @returns String with whitespace removed / 공백이 제거된 문자열
 *
 * @example
 * type Result = Trim<'  Hello World  '> // 'Hello World'
 *
 * @link https://www.utilscript.site/docs/usage-string/trim
 *
 */

export type Trim<S extends string> = S extends `${Blank}${infer Rest}` | `${infer Rest}${Blank}`
  ? Trim<Rest>
  : S;
