import { Equal } from '../Equal';

/**
 *
 * Type to check if a type is any
 *
 * 타입이 any인지 확인하는 타입
 *
 * @param T Type to check / 타입
 *
 * @returns Whether the type is any / 타입이 any인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsAny<any>, true>>,
 *   Expect<Equal<IsAny<undefined>, false>>,
 *   Expect<Equal<IsAny<unknown>, false>>,
 *   Expect<Equal<IsAny<never>, false>>,
 *   Expect<Equal<IsAny<string>, false>>,
 *   Expect<Equal<IsAny<1>, false>>,
 *   Expect<Equal<IsAny<2>, false>>,
 *   Expect<Equal<IsAny<'123'>, false>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-any
 *
 */
export type IsAny<T> = Equal<any, T>;
