/**
 *
 * Converts a number to a string
 *
 * 숫자를 문자열로 변환
 *
 * @param N 변환할 숫자 / Number to convert
 *
 * @returns 변환된 문자열 / Converted string
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<ToString<123>, '123'>>,
 *   Expect<Equal<ToString<0>, '0'>>,
 *   Expect<Equal<ToString<-123>, '-123'>>,
 *   Expect<Equal<ToString<123.456>, '123.456'>>,
 *   Expect<Equal<ToString<0.0>, '0'>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-number/to-string
 *
 */
export type ToString<N extends number> = `${N}`;
