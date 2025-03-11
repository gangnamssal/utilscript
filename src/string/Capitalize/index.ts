import { IsAlphabet } from '../../commonness';

/**
 *
 * Capitalize the first letter of a string
 *
 * 문자열 첫 번째 문자를 대문자로 변환하는 타입
 *
 * @param S String to capitalize / 대문자로 변환할 문자열
 *
 * @param R Result string / 결과 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
 *   Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
 *   Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
 *   Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
 *   Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
 *   Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
 *   Expect<Equal<CapitalizeWords<''>, ''>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-string/capitalize
 *
 */
export type Capitalize<
  S extends string,
  Flag extends boolean = true,
  R extends string = '',
> = S extends `${infer First}${infer Rest}`
  ? IsAlphabet<First> extends true
    ? Flag extends true
      ? Capitalize<Rest, false, `${R}${Uppercase<First>}`>
      : Capitalize<Rest, false, `${R}${First}`>
    : Capitalize<Rest, true, `${R}${First}`>
  : R;
