import { IsAlphabet } from '../../commonness/IsAlphabet';
import { If } from '../../commonness/If';

/**
 *
 * Convert a string to camel case
 *
 * 문자열을 카멜 케이스로 변환
 *
 * @param S String / 문자열
 *
 * @returns Camel case string / 카멜 케이스 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
 *   Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
 *   Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-string/camel-case
 *
 */
export type CamelCase<S extends string> = S extends `${infer Left}${infer Center}${infer Right}`
  ? Left extends '_' | '-'
    ? If<
        IsAlphabet<Center>,
        `${Uppercase<Center>}${CamelCase<Right>}`,
        `${Left}${CamelCase<`${Center}${Right}`>}`
      >
    : `${Lowercase<Left>}${CamelCase<`${Center}${Right}`>}`
  : Lowercase<S>;
