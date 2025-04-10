import { Equal } from '../Equal';

/**
 *
 * Check if the type is a pure bigint
 *
 * 타입이 순수한 bigint인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns true if the type is a pure bigint, false otherwise / 타입이 순수한 bigint이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsPureBigint<bigint>, true>>,
 *   Expect<Equal<IsPureBigint<bigint | number>, false>>,
 *   Expect<Equal<IsPureBigint<number>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-pure-bigint
 *
 */
export type IsPureBigint<T> = Equal<T, bigint>;
