/**
 *
 * Flips the keys and values of an object.
 *
 * 객체의 키와 값을 반전합니다.
 *
 * @param T - Object to flip / 반전할 객체
 *
 * @returns key and value are flipped / 키와 값이 반전된 객체
 *
 * @example
 * type cases = [
 *   Expect<Equal<Flip<{ a: 'x', b: 'y', c: 'z' }>, { x: 'a', y: 'b', z: 'c' }>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/flip
 *
 */

export type Flip<T extends Record<PropertyKey, any>> = { [P in keyof T as `${T[P]}`]: P };
