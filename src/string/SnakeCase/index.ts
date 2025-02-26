/**
 * Convert a string to snake case
 *
 * 문자열을 스네이크 케이스로 변환
 *
 * @param S String / 문자열
 * @returns Snake case string / 스네이크 케이스 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
 *   Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
 *   Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
 *   Expect<
 *     Equal<
 *       SnakeCase<'getElementById' | 'getElementByClassNames'>,
 *       'get_element_by_id' | 'get_element_by_class_names'
 *     >
 *   >,
 * ];
 */

export type SnakeCase<S extends string> = S extends `${infer Left}${infer Center}${infer Right}`
  ? Center extends Uppercase<Center>
    ? Center extends Lowercase<Center>
      ? `${Lowercase<Left>}${SnakeCase<`${Center}${Right}`>}`
      : `${Lowercase<Left>}_${SnakeCase<`${Center}${Right}`>}`
    : `${Lowercase<Left>}${SnakeCase<`${Center}${Right}`>}`
  : Lowercase<S>;
