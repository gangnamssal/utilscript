import { Equal, Expect } from '../../commonness';

/**
 * Type to return the first character of a string
 *
 * 문자열의 첫 번째 문자를 반환하는 타입
 *
 * @param S String / 문자열
 * @returns First character of string / 문자열의 첫 번째 문자
 *
 * @example
 * type cases = [
 *   Expect<Equal<First<'abc'>, 'a'>>,
 *   Expect<Equal<First<'123'>, '1'>>,
 *   Expect<Equal<First<'456'>, '4'>>,
 *   Expect<Equal<First<''>, never>>,
 * ]
 */

export type First<S extends string> = S extends `${infer First}${infer _}` ? First : never;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<First<'abc'>, 'a'>>,
    Expect<Equal<First<'123'>, '1'>>,
    Expect<Equal<First<'456'>, '4'>>,
    Expect<Equal<First<''>, never>>,
  ];

  type errors = [
    // @ts-expect-error
    First<[1, 2, 3]>,
    // @ts-expect-error
    First<{ 0: 'arrayLike' }>,
  ];
}
