/**
 * Convert a union type to an object
 *
 * 유니온 타입을 객체로 변환하는 타입
 *
 * @param T 유니온 타입
 * @returns 객체
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToObject<'a' | 'b' | 'c'>, { a: 'a'; b: 'b'; c: 'c' }>>,
 *   Expect<Equal<ToObject<'a'>, { a: 'a' }>>,
 *   Expect<Equal<ToObject<string>, { [x: string]: string }>>,
 *   Expect<Equal<ToObject<'a' | 1>, { a: 'a'; 1: 1 }>>,
 *   Expect<Equal<ToObject<never>, {}>>,
 * ]
 */
export type ToObject<T> = { [K in T as K extends PropertyKey ? K : never]: K };
