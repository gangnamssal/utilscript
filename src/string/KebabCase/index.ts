import { Equal, Expect } from '../../commonness';

/**
 * Convert a string to kebab case
 *
 * 문자열을 케밥 케이스로 변환
 *
 * @param S String / 문자열
 * @returns Kebab case string / 케밥 케이스 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
 *   Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
 *   Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
 *   Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
 *   Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
 *   Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
 * ]
 */
export type KebabCase<S extends string> = S extends `${infer Left}${infer Center}${infer Right}`
  ? Center extends Uppercase<Center>
    ? Center extends Lowercase<Center>
      ? `${Lowercase<Left>}${KebabCase<`${Center}${Right}`>}`
      : `${Lowercase<Left>}-${KebabCase<`${Center}${Right}`>}`
    : `${Lowercase<Left>}${KebabCase<`${Center}${Right}`>}`
  : Lowercase<S>;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
  ];
}
