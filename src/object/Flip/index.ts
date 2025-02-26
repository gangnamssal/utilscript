/**
 * Flips the keys and values of an object.
 *
 * 객체의 키와 값을 반전합니다.
 *
 * @param T - The object type to flip / 반전할 객체 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<Flip<{ a: 'x', b: 'y', c: 'z' }>, { x: 'a', y: 'b', z: 'c' }>>,
 * ]
 */

export type Flip<T extends Record<PropertyKey, any>> = { [P in keyof T as `${T[P]}`]: P };
