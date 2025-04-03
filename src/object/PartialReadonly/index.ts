import { Equal, If } from '../../commonness';

/**
 *
 * Make some properties readonly
 *
 * 일부 속성을 읽기 전용으로 만드는 타입
 *
 * @param T Readonly object / 읽기 전용 객체
 *
 * @param K Properties to make readonly / 읽기 전용으로 만들 속성
 *
 * @returns PartialReadonly object / 일부 속성이 읽기 전용인 객체
 *
 * @example
 * type cases = [
 *   Expect<
 *     Alike<
 *       PartialReadonly<{ name: string; age: number }, 'name'>,
 *       { readonly name: string; age: number }
 *     >
 *   >,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/partial-readonly
 *
 */

export type PartialReadonly<T, K extends keyof T = keyof T> = If<
  Equal<keyof T, K>,
  Readonly<T>,
  Readonly<Pick<T, K>> & Omit<T, K>
>;
