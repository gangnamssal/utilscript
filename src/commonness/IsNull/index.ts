import { Equal } from '../Equal';

/**
 *
 * Check if the type is null
 *
 * 타입이 null인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns Whether the type is null / 타입이 null인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsNull<null>, true>>,
 *   Expect<Equal<IsNull<undefined>, false>>,
 *   Expect<Equal<IsNull<number>, false>>,
 *   Expect<Equal<IsNull<string>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-null
 *
 */
export type IsNull<T> = Equal<T, null>;
