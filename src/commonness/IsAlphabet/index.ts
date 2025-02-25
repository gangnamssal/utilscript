import { Equal, Expect } from '../../commonness';

/**
 * Check if the string is an alphabet
 *
 * @param S String / 문자열
 * @returns true if the string is an alphabet, false otherwise / 문자열이 알파벳이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsAlphabet<'a'>, true>>,
 *   Expect<Equal<IsAlphabet<'A'>, true>>,
 *   Expect<Equal<IsAlphabet<'1'>, false>>,
 */

export type IsAlphabet<S extends string> = Uppercase<S> extends Lowercase<S> ? false : true;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<IsAlphabet<'a'>, true>>,
    Expect<Equal<IsAlphabet<'A'>, true>>,
    Expect<Equal<IsAlphabet<'1'>, false>>,
    Expect<Equal<IsAlphabet<'가'>, false>>,

    // @ts-expect-error
    Expect<Equal<IsAlphabet<123>, false>>,
  ];
}
