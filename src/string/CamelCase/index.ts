import { Equal, Expect, IsAlphabet } from '../../commonness';

/**
 * Convert a string to camel case
 *
 * @param S String / 문자열
 * @returns Camel case string / 카멜 케이스 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
 *   Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
 *   Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
 * ];
 */
export type CamelCase<S extends string> = S extends `${infer Left}${infer Center}${infer Right}`
  ? Left extends '_' | '-'
    ? IsAlphabet<Center> extends true
      ? `${Uppercase<Center>}${CamelCase<Right>}`
      : `${Left}${CamelCase<`${Center}${Right}`>}`
    : `${Lowercase<Left>}${CamelCase<`${Center}${Right}`>}`
  : Lowercase<S>;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
    Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
    Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
    Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
    Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
    Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
    Expect<Equal<CamelCase<'foo_bar__'>, 'fooBar__'>>,
    Expect<Equal<CamelCase<'foo_bar_$'>, 'fooBar_$'>>,
    Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
    Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
    Expect<Equal<CamelCase<'-'>, '-'>>,
    Expect<Equal<CamelCase<''>, ''>>,
    Expect<Equal<CamelCase<'😎'>, '😎'>>,
  ];
}
