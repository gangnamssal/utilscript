import { If } from '../../commonness/If';
import { IsAlphabet } from '../../commonness/IsAlphabet';

/**
 *
 * Smallize the first letter of a string
 *
 * 문자열의 첫 번째 문자를 소문자로 변환하는 타입
 *
 * @param S String to convert / 소문자로 변환할 문자열
 *
 * @param R Result string / 결과 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Smallize<'FOOBAR'>, 'fOOBAR'>>,
 *   Expect<Equal<Smallize<'fooBar'>, 'fooBar'>>,
 *   Expect<Equal<Smallize<'foo_bar'>, 'foo_bar'>>,
 *   Expect<Equal<Smallize<'foo-bar'>, 'foo-bar'>>,
 *   Expect<Equal<Smallize<'FooBar'>, 'fooBar'>>,
 *   Expect<Equal<Smallize<'foobar'>, 'foobar'>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-string/smallize
 *
 */
export type Smallize<
  S extends string,
  Flag extends boolean = true,
  R extends string = '',
> = S extends `${infer First}${infer Rest}`
  ? If<
      IsAlphabet<First>,
      If<
        Flag,
        Smallize<Rest, false, `${R}${Lowercase<First>}`>,
        Smallize<Rest, false, `${R}${First}`>
      >,
      Smallize<Rest, true, `${R}${First}`>
    >
  : R;
