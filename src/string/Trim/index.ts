import { Blank } from '../../primitive';

/**
 * 문자열의 양쪽 공백을 제거하는 타입
 * Type to remove whitespace from both sides of a string
 *
 * @param S 문자열
 * @returns 양쪽 공백이 제거된 문자열
 *
 * @example
 * type Result = Trim<'  Hello World  '> // 'Hello World'
 */

export type Trim<S extends string> = S extends `${Blank}${infer Rest}` | `${infer Rest}${Blank}`
  ? Trim<Rest>
  : S;
