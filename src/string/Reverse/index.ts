/**
 *
 * Type that takes a string and returns a new string with the characters in reverse order
 *
 * 문자열을 받아 문자열의 문자를 역순으로 배열한 새로운 문자열을 반환하는 타입
 *
 * @param S String to be reversed / 역순으로 배열할 문자열
 *
 * @returns Reversed string / 역순으로 배열된 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Reversed<'hello'>, 'olleh'>>,
 *   Expect<Equal<Reversed<'world'>, 'dlrow'>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-string/reverse
 *
 */
export type Reversed<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Reversed<Rest>}${First}`
  : S;
