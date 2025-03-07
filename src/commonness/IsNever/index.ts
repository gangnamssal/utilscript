/**
 * Type to check if a type is never
 *
 * 타입이 never인지 확인하는 타입
 *
 * @param T Type to check / 타입
 * @returns Whether the type is never / 타입이 never인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsNever<never>, true>>,
 *   Expect<Equal<IsNever<never | string>, false>>,
 *   Expect<Equal<IsNever<''>, false>>,
 *   Expect<Equal<IsNever<undefined>, false>>,
 *   Expect<Equal<IsNever<null>, false>>,
 *   Expect<Equal<IsNever<[]>, false>>,
 *   Expect<Equal<IsNever<{}>, false>>,
 * ]
 */

export type IsNever<T> = [T] extends readonly [never] ? true : false;
