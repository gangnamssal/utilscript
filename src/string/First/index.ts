/**
 *
 * Type to return the first character of a string
 *
 * 문자열의 첫 번째 문자를 반환하는 타입
 *
 * @param S String / 문자열
 *
 * @returns First character of string / 문자열의 첫 번째 문자
 *
 * @example
 * type cases = [
 *   Expect<Equal<First<'abc'>, 'a'>>,
 *   Expect<Equal<First<'123'>, '1'>>,
 *   Expect<Equal<First<'456'>, '4'>>,
 *   Expect<Equal<First<''>, never>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-string/first
 *
 */

export type First<S extends string> = S extends `${infer First}${string}` ? First : never;
