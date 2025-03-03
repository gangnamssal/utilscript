/**
 * Split a string into an array of strings
 *
 * 문자열을 문자열 배열로 분리하는 타입
 *
 * @param S String to split / 분리할 문자열
 * @param D Delimiter to split by / 분리할 문자
 * @returns Array of split strings / 분리된 문자열 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Split<'hello world'>, ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']>>,
 *   Expect<Equal<Split<'hello world', ' '>, ['hello', 'world']>>,
 *   Expect<Equal<Split<'hello world', 'o'>, ['hell', ' w', 'rld']>>,
 *   Expect<Equal<Split<'helloworld', 'o'>, ['hell', 'w', 'rld']>>,
 * ]
 */
export type Split<
  S extends string,
  D extends string = '',
> = S extends `${infer First}${D}${infer Rest}`
  ? Rest extends ''
    ? [S]
    : [First, ...Split<Rest, D>]
  : [S];
