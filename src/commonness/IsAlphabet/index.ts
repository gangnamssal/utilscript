/**
 *
 * Check if the string is an alphabet
 *
 * 문자열이 알파벳인지 확인하는 타입
 *
 * @param S String / 문자열
 *
 * @returns true if the string is an alphabet, false otherwise / 문자열이 알파벳이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsAlphabet<'a'>, true>>,
 *   Expect<Equal<IsAlphabet<'A'>, true>>,
 *   Expect<Equal<IsAlphabet<'1'>, false>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-alphabet
 *
 */

export type IsAlphabet<
  S extends string,
  R extends boolean = false,
> = S extends `${infer First}${infer Rest}`
  ? Uppercase<First> extends Lowercase<First>
    ? false
    : IsAlphabet<Rest, true>
  : R;
