/**
 * Make some properties readonly
 *
 * 일부 속성을 읽기 전용으로 만드는 타입
 *
 * @param T 객체
 * @param K 읽기 전용으로 만들 속성
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
 */

export type PartialReadonly<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;
