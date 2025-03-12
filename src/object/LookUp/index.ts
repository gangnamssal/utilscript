/**
 *
 * Extract a type that matches a specific key value
 *
 * 특정 키의 값을 추출하는 타입
 *
 * @param U Union type of object types / 객체 타입의 유니온 타입
 *
 * @param F Key / 추출할 속성의 키 이름
 *
 * @param T Value / 추출할 속성의 값
 *
 * @returns Object / 추출된 객체 타입
 *
 * @example
 * interface Cat {
 *   type: 'cat';
 *   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
 * }
 *
 * interface Dog {
 *   type: 'dog';
 *   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
 *   color: 'brown' | 'white' | 'black';
 * }
 *
 * type Animal = Cat | Dog;
 *
 * type cases = [
 *   Expect<Equal<LookUp<Animal, 'type', 'dog'>, Dog>>,
 *   Expect<Equal<LookUp<Animal, 'type', 'cat'>, Cat>>,
 *   Expect<Equal<LookUp<Animal, 'breeds', 'Curl'>, Cat>>,
 *   Expect<Equal<LookUp<Animal, 'breeds', 'Boxer'>, Dog>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/lookup
 *
 */

export type LookUp<U, F extends keyof U, T> = U extends any ? (T extends U[F] ? U : never) : never;
