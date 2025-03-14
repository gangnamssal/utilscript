import { If } from '../If';
import { IsNever } from '../IsNever';

/**
 *
 * Type to check if a type is a union
 *
 * 타입이 유니온인지 확인하는 타입
 *
 * @param T Type to check / 확인할 타입
 *
 * @returns Whether the type is a union / 타입이 유니온인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsUnion<string>, false>>,
 *   Expect<Equal<IsUnion<string | number>, true>>,
 *   Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
 *   Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
 *   Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
 *   Expect<Equal<IsUnion<{ a: string | number }>, false>>,
 *   Expect<Equal<IsUnion<[string | number]>, false>>,
 *   // Cases where T resolves to a non-union type.
 *   Expect<Equal<IsUnion<string | never>, false>>,
 *   Expect<Equal<IsUnion<string | unknown>, false>>,
 *   Expect<Equal<IsUnion<string | any>, false>>,
 *   Expect<Equal<IsUnion<string | 'a'>, false>>,
 *   Expect<Equal<IsUnion<never>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-union
 *
 */

export type IsUnion<T, Original = T> = If<
  IsNever<T>,
  false,
  T extends Original ? ([Original] extends readonly [T] ? false : true) : never
>;
