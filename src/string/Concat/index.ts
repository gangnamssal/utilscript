/**
 *
 * Type to concatenate two strings
 *
 * 두 문자열을 연결하는 타입
 *
 * @param T First string / 첫 번째 문자열
 *
 * @param U Second string / 두 번째 문자열
 *
 * @returns Concatenated string / 연결된 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Concat<'abc', 'def'>, 'abcdef'>>,
 *   Expect<Equal<Concat<'123', '456'>, '123456'>>,
 *   Expect<Equal<Concat<'abc', '456'>, 'abc456'>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-string/concat
 *
 */

export type Concat<T extends string, U extends string> = `${T}${U}`;
