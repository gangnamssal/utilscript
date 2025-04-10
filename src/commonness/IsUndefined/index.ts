import { Equal } from '../Equal';

/**
 *
 * Check if the type is undefined
 *
 * 타입이 undefined인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns Whether the type is undefined / 타입이 undefined인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsUndefined<undefined>, true>>,
 *   Expect<Equal<IsUndefined<null>, false>>,
 *   Expect<Equal<IsUndefined<number>, false>>,
 *   Expect<Equal<IsUndefined<string>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-undefined
 *
 */
export type IsUndefined<T> = Equal<T, undefined>;
